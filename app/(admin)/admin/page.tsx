import Overview from '@/components/shared/admin/Overview'
import { getAllProperty } from '@/lib/actions/property.actions'
import { getUser } from '@/lib/actions/user.action'

export default async function Dashboard() {
  const { property } = await getAllProperty()
  const { user } = await getUser()

  console.log('This is property', property)
  console.log('This is user', user)

  return <Overview property={property} user={user} />
}
