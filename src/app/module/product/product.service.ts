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

export const productService = {
  createProduct,
  getProduct,
  getProductById,
}
