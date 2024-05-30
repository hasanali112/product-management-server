"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const varientSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number },
    inStock: { type: Boolean },
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [varientSchema] },
    inventory: { type: inventorySchema },
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
