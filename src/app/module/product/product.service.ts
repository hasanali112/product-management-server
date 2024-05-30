import { ObjectId } from 'mongodb'
import { TProduct } from './product.interface'
import { ProductModel } from './product.medel'

const createProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product)
  return result
}
const getProduct = async () => {
  const result = await ProductModel.find()
  return result
}

const getProductById = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId })
  return result
}

const updateProduct = async (filter: { _id: ObjectId }, update: TProduct) => {
  const result = await ProductModel.findOneAndUpdate(filter, update, {
    new: true,
    runValidators: true,
    upsert: true,
  })
  return result
}

const deleteProduct = async (productId: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: productId })
  return result
}

export const productService = {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
}
