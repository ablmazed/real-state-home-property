'use server'
import { signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { IUserSignIn, IUserSignUp } from '@/types'
import { UserSignUpSchema } from '../validation/validator'
import { connectToDatabase } from '../db'
import User from '../models/user.model'
import { formatError } from '../utils'

//SIGNIN- SIGNOUT
export async function signInWithCredentials(user: IUserSignIn) {
  return await signIn('credentials', { ...user, redirect: false })
}
export const SignOut = async () => {
  const redirectTo = await signOut({ redirect: false })
  redirect(redirectTo.redirect)
}

export const SignInWithGoogle = async () => {
  await signIn('google')
}

// CREATE
export async function registerUser(userSignUp: IUserSignUp) {
  try {
    const user = await UserSignUpSchema.parseAsync({
      name: userSignUp.name,
      email: userSignUp.email,
      password: userSignUp.password,
      confirmPassword: userSignUp.confirmPassword,
    })

    await connectToDatabase()
    await User.create({
      ...user,
      password: await bcrypt.hash(user.password, 5),
    })
    return { success: true, message: 'User created successfully' }
  } catch (error) {
    return { success: false, error: formatError(error) }
  }
}
