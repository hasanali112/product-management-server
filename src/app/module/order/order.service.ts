import { ProductModel } from '../product/product.medel'
import { TOrder } from './order.interface'
import { OrderModel } from './order.model'

const productCreate = async (order: TOrder) => {
  const { productId, quantity } = order
  const orderId = await ProductModel.findById(productId)
  if (!orderId) {
    throw new Error('Product id is not valid')
  }
  if (orderId.inventory.quantity >= quantity) {
    orderId.inventory.quantity -= quantity
  } else {
    orderId.inventory.inStock = false
    await orderId.save()
    throw new Error('Insufficient quantity available in inventory')
  }
  await orderId.save()
  const result = await OrderModel.create(order)
  return result
}

const productget = async () => {
  const result = await OrderModel.find()
  return result
}

export const orderService = {
  productCreate,
  productget,
}
