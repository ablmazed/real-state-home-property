import PropertiesForm from '@/components/shared/properties/PropertiesForm'

export default function AddProperty() {
  return (
    <main className="p-4">
      <h2>Add Propert</h2>
      <PropertiesForm type="Create" />
    </main>
  )
}
