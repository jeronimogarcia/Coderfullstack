import Product from '../models/product';
import { editObject } from '../types/editObject';
import { addObject } from '../types/addObject';

export const findProducts = async () => {
  return await Product.find().exec();
};

export const findProductById = async (id: string) => {
  return await Product.findById(id).exec();
};

export const updateProductById = async (id: string, product: editObject) => {
  return await Product.findByIdAndUpdate(id, product);
};

export const deleteProductById = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const addProduct = async (product: addObject) => {
  return await Product.create(product);
};
