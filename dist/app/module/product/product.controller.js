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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_validation_1 = __importDefault(require("./product.validation"));
const product_service_1 = require("./product.service");
const productCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodeParseData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.productService.createProduct(zodeParseData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
const productGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.getProduct();
        res.status(200).json({
            success: true,
            message: 'Product fetch successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
exports.productController = {
    productCreate,
    productGet,
};
