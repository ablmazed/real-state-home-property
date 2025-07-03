import { connectToDatabase } from '@/lib/db'
import User from '@/lib/models/user.model'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    console.log(email, password)

    if (!email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 401 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.log('this is server error')
    return NextResponse.json(error, { status: 500 })
  }
}
