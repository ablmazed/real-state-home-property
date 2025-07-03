'use server'
import { connectToDatabase } from '@/lib/db'
import User, { IUser } from '@/lib/models/user.model'

// GET ONE PROPERTY BY ID

export async function getUser() {
  await connectToDatabase()
  const users = await User.find()

  return {
    user: JSON.parse(JSON.stringify(users)) as IUser[],
  }
}
