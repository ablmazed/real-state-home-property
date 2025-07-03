'use server'
import { connectToDatabase } from '@/lib/db'
import Property, { IProperty } from '../models/property.model'
import { IPropertyInput } from '@/types'
import {
  PropertyInputSchema,
  PropertyUpdateSchema,
} from '../validation/validator'
import { revalidatePath } from 'next/cache'
import { formatError } from '../utils'
import { z } from 'zod'
import { getSetting } from './setting.actions'

// GET ONE PROPERTY BY ID

export async function getPropertyById(id: string) {
  await connectToDatabase()
  const property = await Property.findById(id)
  return JSON.parse(JSON.stringify(property)) as IProperty
}

// GET  PROPERTY BY TAG

export async function getPropertyByTag({
  tag,
  limit = 10,
}: {
  tag: string
  limit?: number
}) {
  await connectToDatabase()
  const properties = await Property.find({
    tags: { $in: [tag] },
  })
    .sort({ createdAt: 'desc' })
    .limit(limit)
  return JSON.parse(JSON.stringify(properties)) as IProperty[]
}

// GET ALL property
export async function getAllProperty() {
  await connectToDatabase()

  const properties = await Property.find()

  return {
    property: JSON.parse(JSON.stringify(properties)) as IProperty[],
  }
}

// GET ALL PROPERTY FOR ADMIN
export async function getAllPropertyForAdmin({
  query,
  page = 1,
  sort = 'latest',
  limit,
}: {
  query: string
  page?: number
  sort?: string
  limit?: number
}) {
  await connectToDatabase()

  const {
    common: { pageSize },
  } = await getSetting()
  limit = limit || pageSize

  const queryFilter =
    query && query !== 'all'
      ? {
          name: {
            $regex: query,
            $options: 'i',
          },
        }
      : {}

  const order: Record<string, 1 | -1> =
    sort === 'best-selling'
      ? { numSales: -1 }
      : sort === 'price-low-to-high'
      ? { price: 1 }
      : sort === 'price-high-to-low'
      ? { price: -1 }
      : sort === 'avg-customer-review'
      ? { avgRating: -1 }
      : { _id: -1 }
  const properties = await Property.find({
    ...queryFilter,
  })
    .sort(order)
    .skip(limit * (Number(page) - 1))
    .limit(limit)
    .lean()

  const countProperties = await Property.countDocuments({
    ...queryFilter,
  })
  return {
    products: JSON.parse(JSON.stringify(properties)) as IProperty[],
    totalPages: Math.ceil(countProperties),
  }
}

// CREATE
export async function createProperty(data: IPropertyInput) {
  try {
    const property = PropertyInputSchema.parse(data)
    await connectToDatabase()
    await Property.create(property)
    revalidatePath('/admin/properties')
    return {
      success: true,
      message: 'Product created successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}

// UPDATE
export async function updateProperty(
  data: z.infer<typeof PropertyUpdateSchema>
) {
  try {
    const property = PropertyUpdateSchema.parse(data)
    await connectToDatabase()
    await Property.findByIdAndUpdate(property._id, property)
    revalidatePath('/admin/properties')
    return {
      success: true,
      message: 'Product updated successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}

// DELETE
export async function deleteProperty(id: string) {
  try {
    await connectToDatabase()
    const res = await Property.findByIdAndDelete(id)
    if (!res) throw new Error('Product not found')
    revalidatePath('/admin/products')
    return {
      success: true,
      message: 'Product deleted successfully',
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
