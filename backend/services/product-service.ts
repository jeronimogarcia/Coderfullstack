import * as repo from '../repositories/product.repository';
import { ProductProps } from '../models/product';
import { editObject } from '../types/editObject';
import { addObject } from '../types/addObject';

export const getProducts = async (): Promise<ProductProps[]> => {
  return await repo.findProducts();
};

export const getProductById = async (id: string): Promise<ProductProps | null> => {
  return await repo.findProductById(id);
};

export const updateProduct = async (id: string, product: editObject): Promise<any> => {
  return await repo.updateProductById(id, product);
};

export const deleteProduct = async (id: string): Promise<any> => {
  return await repo.deleteProductById(id);
};

export const addProduct = async (product: addObject): Promise<any> => {
  return await repo.addProduct(product);
};
