import { IProperty } from '@/lib/models/property.model'

export default function PropertyComponent({
  title,
  properties,
}: {
  title?: string
  properties: IProperty[]
}) {
  return (
    <div>
      This is property component
      <h2>{title}</h2>
      {properties.map((property) => (
        <div key={property.title}>
          <h4>{property.title}</h4>
        </div>
      ))}
    </div>
  )
}
