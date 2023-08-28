import { RequestHandler } from 'express';
import { getUserWithToken } from '../services/user-service';

export const isAdmin: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = (authHeader as string).split(' ')[1];
  const user = await getUserWithToken(token);
  if (user.role != 'admin') return res.status(401).send({ error: 'Unauthorized' });
  next();
};
