import * as repo from '../repositories/cart.repository';
import { Iproduct } from '../types/addCartObject';

export const addCartToDB = async (userId: string, cart: Iproduct[]): Promise<any> => {
  const cartToAdd = {
    user: userId,
    cart,
  };
  try {
    return await repo.addCart(cartToAdd);
  } catch (error) {
    console.log(error);
  }
};
