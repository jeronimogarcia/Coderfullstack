import Carritos from '../models/carritos';
import { addCartObject } from '../types/addCartObject';

export const addCart = async (cartToAdd: addCartObject) => {
  return await Carritos.create(cartToAdd);
};
