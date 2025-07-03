import { getPropertyById } from '@/lib/actions/property.actions'
import Image from 'next/image'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function PropertyDetails({ params }: Props) {
  const { id } = await params
  const property = await getPropertyById(id)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <Image
        src={property.imageUrl}
        alt={property.title}
        width={800}
        height={400}
        className="rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">{property.description}</p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> ${property.price}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Bathrooms:</strong> {property.bathrooms}
        </p>
        <p>
          <strong>Square Feet:</strong> {property.sqft}
        </p>
        <p>
          <strong>Garage SqFt:</strong> {property.GarageSqFt}
        </p>
        <p>
          <strong>Basement:</strong> {property.basement}
        </p>
        <p>
          <strong>Year Built:</strong> {property.YearBuilt}
        </p>
        <p>
          <strong>Property Type:</strong> {property.propertyType}
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Indoor Features</h2>
      <ul className="list-disc ml-6">
        {property.indoorFeatures?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Building Amenities</h2>
      <ul className="list-disc ml-6">
        {property.buildingAmenities?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
