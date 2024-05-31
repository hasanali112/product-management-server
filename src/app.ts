import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './app/module/product/product.route'
import { orderRouter } from './app/module/order/order.route'

const app: Application = express()

//perser
app.use(express.json())
app.use(cors())

app.use('/', productRoutes)
app.use('/', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Product management is running',
  })
})

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route not found',
  })
})

export default app
