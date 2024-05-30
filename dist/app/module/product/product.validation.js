"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantSchemaValidation = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const inventorySchemaValidation = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
const productSchemaValidation = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    description: zod_1.z.string().min(1, 'Description is required'),
    price: zod_1.z.number().min(0, 'Price must be a positive number'),
    category: zod_1.z.string().min(1, 'Category is required'),
    tags: zod_1.z.array(zod_1.z.string()).min(1, 'At least one tag is required'),
    variants: zod_1.z.array(variantSchemaValidation),
    inventory: inventorySchemaValidation,
});
exports.default = productSchemaValidation;
