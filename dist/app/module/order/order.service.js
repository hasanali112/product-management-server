"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const product_medel_1 = require("../product/product.medel");
const order_model_1 = require("./order.model");
const productCreate = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = order;
    const orderId = yield product_medel_1.ProductModel.findById(productId);
    if (!orderId) {
        throw new Error('Product id is not valid');
    }
    if (orderId.inventory.quantity >= quantity) {
        orderId.inventory.quantity -= quantity;
    }
    else {
        orderId.inventory.inStock = false;
        yield orderId.save();
        throw new Error('Insufficient quantity available in inventory');
    }
    yield orderId.save();
    const result = yield order_model_1.OrderModel.create(order);
    return result;
});
const productget = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (email) {
        result = yield order_model_1.OrderModel.find({ email: { $regex: email, $options: 'i' } });
        if (result.length === 0) {
            throw new Error('Order not found');
        }
    }
    else {
        result = yield order_model_1.OrderModel.find();
    }
    return result;
});
exports.orderService = {
    productCreate,
    productget,
};
