import * as z from 'zod'
import { formatNumberWithDecimal } from '../utils'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
})

export default formSchema

//Header-Menu
export const HeaderMenuSchema = z.object({
  name: z.string(),
  href: z.any(),
})

//Footer-Menu

export const FooterMenuSchema = z.object({
  title: z.string(),
  links: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    })
  ),
})
//Home-Card

export const HomeCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  btnTitle: z.string(),
  btnColor: z.string(),
})

// USER
const UserName = z
  .string()
  .min(2, { message: 'Username must be at least 2 characters' })
  .max(50, { message: 'Username must be at most 30 characters' })
const Email = z.string().min(1, 'Email is required').email('Email is invalid')
const Password = z.string().min(3, 'Password must be at least 3 characters')
const UserRole = z.string().min(1, 'role is required')

export const UserInputSchema = z.object({
  name: UserName,
  email: Email,
  image: z.string().optional(),
  emailVerified: z.boolean(),
  role: UserRole,
  password: Password,
  paymentMethod: z.string().min(1, 'Payment method is required'),
  address: z.object({
    fullName: z.string().min(1, 'Full name is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    province: z.string().min(1, 'Province is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    country: z.string().min(1, 'Country is required'),
    phone: z.string().min(1, 'Phone number is required'),
  }),
})

export const UserSignInSchema = z.object({
  email: Email,
  password: Password,
})

export const UserSignUpSchema = UserSignInSchema.extend({
  name: UserName,
  confirmPassword: Password,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

// Common
const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    )

//order-place
const MongoId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid MongoDB ID' })

//product-review
export const ReviewInputSchema = z.object({
  product: MongoId,
  user: MongoId,
  isVerifiedPurchase: z.boolean(),
  title: z.string().min(1, 'Title is required'),
  comment: z.string().min(1, 'Comment is required'),
  rating: z.coerce
    .number()
    .int()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
})

export const PropertyInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  tags: z.array(z.string()).default([]),
  description: z.string().min(1, 'Description is required'),
  details: z.string().min(1, 'Details are required'),
  price: z.number().positive('Price must be greater than 0'),
  location: z.string().min(1, 'Location is required'),
  imageUrl: z.string().min(1, 'Minimum 1 image'),
  bedrooms: z.number().min(1, 'Bedrooms must be at least 1'),
  bathrooms: z.number().min(1, 'Bathrooms must be at least 1'),
  sqft: z.number().min(1, 'Square footage must be greater than 0'),
  LotSize: z.number().min(1, 'Lot Size must be greater than 0'),
  HOADues: z.number().min(1, 'HOA Dues must be greater than 0'),
  YearBuilt: z.number().min(1, 'Year Built must be greater than 0'),
  GarageSqFt: z.number().min(1, 'Garage SqFt must be greater than 0'),
  BasementSqFt: z.number().min(1, 'Basement SqFt must be greater than 0'),
  propertyType: z.string().min(1, 'Property type is required'),
  isForSale: z.boolean(),
  basement: z.string().optional(),
  floorCovering: z.array(z.string()).optional(),
  coolingType: z.array(z.string()).optional(),
  heatingType: z.array(z.string()).optional(),
  heatingFuel: z.array(z.string()).optional(),
  rooms: z.array(z.string()).optional(),
  indoorFeatures: z.array(z.string()).optional(),
  buildingAmenities: z.array(z.string()).optional(),
  architecturalStyle: z.string().optional(),
  exterior: z.array(z.string()).optional(),
  outdoorAmenities: z.array(z.string()).optional(),
  parking: z.array(z.string()).optional(),
  roof: z.array(z.string()).optional(),
  view: z.array(z.string()).optional(),
})

// Order Item
export const OrderInputSchema = z.object({
  clientId: z.string().min(1, 'clientId is required'),
  property: z.string().min(1, 'Product is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  location: z.string().min(1, 'Location is required'),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative number'),
  countInStock: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative number'),
  image: z.string().min(1, 'Image is required'),
  price: Price('Price'),
  size: z.string().optional(),
  color: z.string().optional(),
})

export const CartSchema = z.object({
  items: z
    .array(OrderInputSchema)
    .min(1, 'Order must contain at least one item'),
  itemsPrice: z.number(),

  taxPrice: z.optional(z.number()),
  shippingPrice: z.optional(z.number()),
  totalPrice: z.number(),
  paymentMethod: z.optional(z.string()),
  deliveryDateIndex: z.optional(z.number()),
  expectedDeliveryDate: z.optional(z.date()),
})

// export const addPropertySchema = PropertyInputSchema.omit({ id: true })

// export const PropertyUpdateSchema = PropertyInputSchema.extend({
//   _id: z.string(),
// })
// export const PropertyUpdateSchema = PropertyInputSchema
export const PropertyUpdateSchema = PropertyInputSchema.extend({
  _id: z.string().min(1, 'Property ID is required'),
})

export const ProductInputSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(1, 'Category is required'),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  brand: z.string().min(1, 'Brand is required'),
  description: z.string().min(1, 'Description is required'),
  isPublished: z.boolean(),
  price: Price('Price'),
  listPrice: Price('List price'),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative('count in stock must be a non-negative number'),
  tags: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  colors: z.array(z.string()).default([]),
  avgRating: z.coerce
    .number()
    .min(0, 'Average rating must be at least 0')
    .max(5, 'Average rating must be at most 5'),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('Number of reviews must be a non-negative number'),
  ratingDistribution: z
    .array(z.object({ rating: z.number(), count: z.number() }))
    .max(5),
  reviews: z.array(ReviewInputSchema).default([]),
  numSales: z.coerce
    .number()
    .int()
    .nonnegative('Number of sales must be a non-negative number'),
})

export const ProductUpdateSchema = ProductInputSchema.extend({
  _id: z.string(),
})

export const SettingInputSchema = z.object({
  // PROMPT: create fields
  // codeium, based on the mongoose schema for settings
  common: z.object({
    pageSize: z.coerce
      .number()
      .min(1, 'Page size must be at least 1')
      .default(9),
    isMaintenanceMode: z.boolean().default(false),
    freeShippingMinPrice: z.coerce
      .number()
      .min(0, 'Free shipping min price must be at least 0')
      .default(0),
    defaultTheme: z
      .string()
      .min(1, 'Default theme is required')
      .default('light'),
    defaultColor: z
      .string()
      .min(1, 'Default color is required')
      .default('gold'),
  }),
  site: z.object({
    name: z.string().min(1, 'Name is required'),
    logo: z.string().min(1, 'logo is required'),
    slogan: z.string().min(1, 'Slogan is required'),
    description: z.string().min(1, 'Description is required'),
    keywords: z.string().min(1, 'Keywords is required'),
    url: z.string().min(1, 'Url is required'),
    email: z.string().min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone is required'),
    author: z.string().min(1, 'Author is required'),
    copyright: z.string().min(1, 'Copyright is required'),
    address: z.string().min(1, 'Address is required'),
  }),
})
