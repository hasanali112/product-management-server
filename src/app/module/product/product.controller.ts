import { Request, Response } from 'express'
import productSchemaValidation from './product.validation'
import { productService } from './product.service'
import { ObjectId } from 'mongodb'

const productCreate = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const zodeParseData = productSchemaValidation.parse(productData)
    const result = await productService.createProduct(zodeParseData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    })
  }
}

const productGet = async (req: Request, res: Response) => {
  try {
    const name = req.query.searchTerm as string
    let result
    if (name) {
      result = await productService.getProduct(name)
      res.status(200).json({
        success: true,
        message: `Products matching search term '${name}' fetched successfully!`,
        data: result,
      })
    } else {
      result = await productService.getProduct()
      res.status(200).json({
        success: true,
        message: 'Product fetch successfully',
        data: result,
      })
    }
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    })
  }
}

const productGetById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await productService.getProductById(productId)
    res.status(200).json({
      success: true,
      message: 'Product fetch successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    })
  }
}

const productUpdate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const filter = { _id: new ObjectId(productId) }
    const update = req.body
    const result = await productService.updateProduct(filter, update)
    res.status(200).json({
      success: true,
      message: 'Product update successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    })
  }
}
const productDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    await productService.deleteProduct(productId)
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: null,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    })
  }
}

export const productController = {
  productCreate,
  productGet,
  productGetById,
  productUpdate,
  productDelete,
}
