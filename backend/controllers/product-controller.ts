import { RequestHandler } from 'express';
import { ProductProps } from '../models/product';
import * as service from '../services/product-service';
import { ok, notFound } from './base-controller';

export const executeGetProducts: RequestHandler = async (req, res): Promise<any> => {
  const products = await service.getProducts();
  return !!products && products.length > 0 ? ok<ProductProps[]>(res, products) : notFound(res);
};

export const executeGetProductById: RequestHandler = async (req, res): Promise<any> => {
  const { id } = req.params;
  const product = await service.getProductById(id);
  return !!product ? ok<ProductProps>(res, product) : notFound(res);
};

export const executeUpdateProduct: RequestHandler = async (req, res): Promise<any> => {
  const { id } = req.params;
  const { body } = req;
  const product = await service.updateProduct(id, body);
  return !!product ? ok<ProductProps>(res, product) : notFound(res);
};

export const executeDeleteProduct: RequestHandler = async (req, res): Promise<any> => {
  const { id } = req.params;
  const product = await service.deleteProduct(id);
  return !!product ? ok<ProductProps>(res, product) : notFound(res);
};
