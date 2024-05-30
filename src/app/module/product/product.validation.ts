import { z } from 'zod'

const variantSchemaValidation = z.object({
  type: z.string(),
  value: z.string(),
})

const inventorySchemaValidation = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
})

const productSchemaValidation = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  variants: z.array(variantSchemaValidation),
  inventory: inventorySchemaValidation,
})

export default productSchemaValidation
