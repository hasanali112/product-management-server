import express from 'express'
import { productController } from './product.controller'

const route = express.Router()

route.post('/api/products', productController.productCreate)
route.get('/api/products', productController.productGet)
route.get('/api/products/:productId', productController.productGetById)
route.put('/api/products/:productId', productController.productUpdate)

export const productRoutes = route
