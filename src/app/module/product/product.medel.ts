import { Schema, model } from 'mongoose'
import { TInventory, TProduct, TVarients } from './product.interface'

const varientSchema = new Schema<TVarients>(
  {
    type: { type: String },
    value: { type: String },
  },
  {
    _id: false,
  }
)

const inventorySchema = new Schema<TInventory>(
  {
    quantity: { type: Number },
    inStock: { type: Boolean },
  },
  {
    _id: false,
  }
)

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [varientSchema] },
  inventory: { type: inventorySchema },
})

export const ProductModel = model<TProduct>('Product', productSchema)
