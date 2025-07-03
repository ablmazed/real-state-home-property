import { IPropertyInput } from '@/types'
import {
  Document,
  // InferSchemaType,
  Model,
  model,
  models,
  Schema,
} from 'mongoose'

export interface IProperty extends Document, IPropertyInput {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const propertySchema = new Schema<IProperty>(
  {
    title: { type: String, required: true },
    tags: { type: [String], default: ['new arrival'] },
    description: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    sqft: { type: Number, required: true },
    LotSize: { type: Number, required: true },
    HOADues: { type: Number, required: true },
    YearBuilt: { type: Number, required: true },
    GarageSqFt: { type: Number, required: true },
    BasementSqFt: { type: Number, required: true },
    propertyType: { type: String, required: true },
    isForSale: { type: Boolean, required: true },
    basement: { type: String },
    floorCovering: [{ type: String }],
    coolingType: [{ type: String }],
    heatingType: [{ type: String }],
    heatingFuel: [{ type: String }],
    rooms: [{ type: String }],
    indoorFeatures: [{ type: String }],
    buildingAmenities: [{ type: String }],
    architecturalStyle: { type: String },
    exterior: [{ type: String }],
    outdoorAmenities: [{ type: String }],
    parking: [{ type: String }],
    roof: [{ type: String }],
    view: [{ type: String }],
  },

  {
    timestamps: true,
  }
)

const Property =
  (models.Property as Model<IProperty>) ||
  model<IProperty>('Property', propertySchema)

export default Property
