import { RequestHandler } from 'express';
import { notFound, ok } from './base-controller';
import { CarritosProps } from '../models/carritos';
import * as service from '../services/cart-service';

export const executeAddCart: RequestHandler = async (req, res): Promise<any> => {
  const { userId } = req.params;
  const { body } = req;
  const cart = await service.addCartToDB(userId, body);
  return !!cart ? ok<CarritosProps>(res, cart) : notFound(res);
};
