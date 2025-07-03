import {
  UserInputSchema,
  UserSignInSchema,
  HeaderMenuSchema,
  FooterMenuSchema,
  HomeCardSchema,
  UserSignUpSchema,
  ProductInputSchema,
  SettingInputSchema,
  CartSchema,
  PropertyInputSchema,
  OrderInputSchema,
  // addPropertySchema,
} from '@/lib/validation/validator'
import * as z from 'zod'

export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IHeaderMenu = z.infer<typeof HeaderMenuSchema>
export type IFooterMenu = z.infer<typeof FooterMenuSchema>
export type IHomeCard = z.infer<typeof HomeCardSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IPropertyInput = z.infer<typeof PropertyInputSchema>
export type IProductInput = z.infer<typeof ProductInputSchema>
export type ISettingInput = z.infer<typeof SettingInputSchema>
export type IOrderInput = z.infer<typeof OrderInputSchema>
export type Cart = z.infer<typeof CartSchema>
// export type IAddProperty = z.infer<typeof addPropertySchema>

export type Data = {
  settings: ISettingInput[]
  users: IUserInput[]
  headerMenu: IHeaderMenu[]
  footerMenu: IFooterMenu[]
  homeCard: IHomeCard[]
  property: IPropertyInput[]
}
