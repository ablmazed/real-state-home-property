import data from '@/lib/data'
import { connectToDatabase } from '.'
import User from '@/lib/models/user.model'

import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import Property from '@/lib/models/property.model'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { users } = data
    const { property } = data
    await connectToDatabase(process.env.MONGODB_URI)

    await User.deleteMany()
    const createdUser = await User.insertMany(users)

    await Property.deleteMany()
    const createdProperty = await Property.insertMany(property)

    console.log({
      createdUser,
      createdProperty,
      message: 'Seeded database successfully',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()
