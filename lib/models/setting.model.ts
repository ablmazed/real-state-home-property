import { ISettingInput } from '@/types'
import { Document, Model, model, models, Schema } from 'mongoose'

export interface ISetting extends Document, ISettingInput {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const settingSchema = new Schema<ISetting>({
  common: {
    pageSize: { type: Number, required: true, default: 9 },
    isMaintenanceMode: { type: Boolean, required: true, default: false },
    freeShippingMinPrice: { type: Number, required: true, default: 0 },
    defaultTheme: { type: String, required: true, default: 'light' },
    defaultColor: { type: String, required: true, default: 'gold' },
  },
})

const Setting =
  (models.Setting as Model<ISetting>) ||
  model<ISetting>('Setting', settingSchema)

export default Setting
