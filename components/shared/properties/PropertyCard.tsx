import { Card, CardContent } from '@/components/ui/card'
import { IProperty } from '@/lib/models/property.model'
import Image from 'next/image'
import Link from 'next/link'

export default function PropertyCard({
  properties,
}: {
  properties: IProperty[]
}) {
  console.log('data from property card ', properties)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-20 gap-3">
      {properties.map((item) => (
        <Link href={`/properties/${item._id}`} key={item.title}>
          <Card className=" border-solid border-gray-100 shadow-2xl border-2  ">
            <CardContent>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={300}
              />

              <h1>{item.title}</h1>
              <p>{item.price}</p>
              <p>{`${item.bedrooms}, ${item.bathrooms}, ${item.sqft}`}</p>

              <h6>{item.location}</h6>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
