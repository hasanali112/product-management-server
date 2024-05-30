import express from 'express'
import { productController } from './product.controller'

const route = express.Router()

route.post('/api/products', productController.productCreate)
route.get('/api/products', productController.productGet)

export const productRoutes = route
