import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../src/server';

export const decodeJWT = (token: string) => {
  try {
    // Decode the JWT and extract the payload
    return jwt.verify(token, JWT_SECRET as string);
  } catch (error) {
    console.log(error);
  }
};
