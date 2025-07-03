import { notFound } from 'next/navigation'
import { getPropertyById } from '@/lib/actions/property.actions'
import Link from 'next/link'
import { Metadata } from 'next'
import PropertiesForm from '@/components/shared/properties/PropertiesForm'

export const metadata: Metadata = {
  title: 'Edit Product',
}

type UpdatePropertyProps = {
  params: Promise<{
    id: string
  }>
}

const UpdateProperty = async (props: UpdatePropertyProps) => {
  const params = await props.params

  const { id } = params

  const property = await getPropertyById(id)
  if (!property) notFound()
  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="flex mb-4">
        <Link href="/admin/property">property</Link>
        <span className="mx-1">›</span>
        <Link href={`/admin/property/${property._id}`}>{property._id}</Link>
      </div>

      <div className="my-8">
        <PropertiesForm
          type="Update"
          property={property}
          propertyId={property._id}
        />
      </div>
    </main>
  )
}

export default UpdateProperty
