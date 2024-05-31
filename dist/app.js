"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/module/product/product.route");
const order_route_1 = require("./app/module/order/order.route");
const app = (0, express_1.default)();
//perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', product_route_1.productRoutes);
app.use('/', order_route_1.orderRouter);
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Product management is running',
    });
});
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route not found',
    });
});
exports.default = app;
