import express from 'express'
import { orderController } from './order.controller'

const route = express.Router()

route.post('/api/orders', orderController.createOrder)
route.get('/api/orders', orderController.getOrder)

export const orderRouter = route
