import { TProduct } from './product.interface'
import { ProductModel } from './product.medel'

const createProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product)
  return result
}

export const productService = {
  createProduct,
}
