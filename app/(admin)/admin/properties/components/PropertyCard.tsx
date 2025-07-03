'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import Image from 'next/image'
import Link from 'next/link'
import DeleteDialog from '@/components/shared/delete-dialog'
import { deleteProperty, getAllProperty } from '@/lib/actions/property.actions'
import React, { useEffect, useState, useTransition } from 'react'
import { IProperty } from '@/lib/models/property.model'

type PropertyListDataProps = {
  property: IProperty[]
}
export default function PropertyCard() {
  const [data, setData] = useState<PropertyListDataProps>()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const fetchData = async () => {
      const propertyData = await getAllProperty()
      setData(propertyData) // assuming the response is { properties: IProperty[] }
    }

    fetchData()
  }, [])

  console.log('this is data from property card', data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-20 gap-3">
      {isPending && <p>Loading...</p>}

      {data?.property.map((property) => (
        <Card
          key={property._id}
          className=" border-solid border-gray-100 shadow-2xl border-2  "
        >
          <CardContent>
            <Image
              src={property.imageUrl}
              alt={property.title}
              width={400}
              height={300}
            />

            <p> {property._id}</p>

            <p>{property.price}</p>
            <p>{`${property.bedrooms}, ${property.bathrooms}, ${property.sqft}`}</p>

            <h6>{property.location}</h6>
          </CardContent>
          <CardFooter className="text-small justify-between">
            <DeleteDialog
              id={property._id}
              action={deleteProperty}
              callbackAction={() => {
                startTransition(async () => {
                  const data = await getAllProperty()
                  setData(data)
                })
              }}
            />

            <b className="text-xs text-start text-default-500">
              For Sale: {property.isForSale ? 'Yes' : 'No'}
            </b>

            <Link href={`/admin/properties/${property._id}`}>
              <Button color="primary">Edit</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
