import mongoose from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectToDatabase(MONGODB_URI = process.env.MONGODB_URI) {
  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }

  if (cached.conn) {
    console.log('Using cached database connection')
    return cached.conn
  }

  if (!cached.promise) {
    console.log('Creating new database connection...')
    cached.promise = mongoose.connect(MONGODB_URI) // ✅ অপটিমাইজড কোড
  }

  cached.conn = await cached.promise
  console.log('Database connected successfully')

  return cached.conn
}

// import mongoose from 'mongoose'

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const cached = (global as any).mongoose || { conn: null, promise: null }

// export const connectToDatabase = async (
//   MONGODB_URI = process.env.MONGODB_URI
// ) => {
//   if (cached.conn) return cached.conn

//   if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

//   cached.promise = cached.promise || mongoose.connect(MONGODB_URI)

//   cached.conn = await cached.promise

//   return cached.conn
// }
