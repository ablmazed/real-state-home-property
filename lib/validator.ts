import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

// Common
const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    )
//order-place
const MongoId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid MongoDB ID' })

//product-review
export const ReviewInputSchema = z.object({
  product: MongoId,
  user: MongoId,
  isVerifiedPurchase: z.boolean(),
  title: z.string().min(1, 'Title is required'),
  comment: z.string().min(1, 'Comment is required'),
  rating: z.coerce
    .number()
    .int()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
})

export const ProductInputSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(1, 'Category is required'),
  // images: z.array(z.string()).min(1, 'Product must have at least one image'),
  images: z.array(z.string()),
  brand: z.string().min(1, 'Brand is required'),
  description: z.string().min(1, 'Description is required'),
  isPublished: z.boolean(),
  price: Price('Price'),
  listPrice: Price('List price'),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative('count in stock must be a non-negative number'),
  tags: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  colors: z.array(z.string()).default([]),
  avgRating: z.coerce
    .number()
    .min(0, 'Average rating must be at least 0')
    .max(5, 'Average rating must be at most 5'),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('Number of reviews must be a non-negative number'),
  ratingDistribution: z
    .array(z.object({ rating: z.number(), count: z.number() }))
    .max(5),
  reviews: z.array(ReviewInputSchema).default([]),
  numSales: z.coerce
    .number()
    .int()
    .nonnegative('Number of sales must be a non-negative number'),
})

export const ProductUpdateSchema = ProductInputSchema

export const PropertyInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  tags: z.array(z.string()).default([]),
  description: z.string().min(1, 'Description is required'),
  details: z.string().min(1, 'Details are required'),
  price: z.number().positive('Price must be greater than 0'),
  location: z.string().min(1, 'Location is required'),
  imageUrl: z.string().min(1, 'Minimum 1 image'),
  bedrooms: z.number().min(1, 'Bedrooms must be at least 1'),
  bathrooms: z.number().min(1, 'Bathrooms must be at least 1'),
  sqft: z.number().min(1, 'Square footage must be greater than 0'),
  LotSize: z.number().min(1, 'Lot Size must be greater than 0'),
  HOADues: z.number().min(1, 'HOA Dues must be greater than 0'),
  YearBuilt: z.number().min(1, 'Year Built must be greater than 0'),
  GarageSqFt: z.number().min(1, 'Garage SqFt must be greater than 0'),
  BasementSqFt: z.number().min(1, 'Basement SqFt must be greater than 0'),
  propertyType: z.string().min(1, 'Property type is required'),
  isForSale: z.boolean(),
  basement: z.string().optional(),
  floorCovering: z.array(z.string()).optional(),
  coolingType: z.array(z.string()).optional(),
  heatingType: z.array(z.string()).optional(),
  heatingFuel: z.array(z.string()).optional(),
  rooms: z.array(z.string()).optional(),
  indoorFeatures: z.array(z.string()).optional(),
  buildingAmenities: z.array(z.string()).optional(),
  architecturalStyle: z.string().optional(),
  exterior: z.array(z.string()).optional(),
  outdoorAmenities: z.array(z.string()).optional(),
  parking: z.array(z.string()).optional(),
  roof: z.array(z.string()).optional(),
  view: z.array(z.string()).optional(),
})
// export const addPropertySchema = PropertyInputSchema.omit({ id: true })

// export const PropertyUpdateSchema = PropertyInputSchema.extend({
//   _id: z.string(),
// })
// export const PropertyUpdateSchema = PropertyInputSchema
export const PropertyUpdateSchema = PropertyInputSchema
