import { Request, Response } from 'express'
import orderValidationSchema from './order.validation'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body
    const zodParseOrderData = orderValidationSchema.parse(orderData)
    const result = await orderService.productCreate(zodParseOrderData)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong!',
    })
  }
}
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.productget()
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong!',
      data: error,
    })
  }
}

export const orderController = {
  createOrder,
  getOrder,
}
