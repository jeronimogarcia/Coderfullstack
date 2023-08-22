import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../src/server';

type userLog = {
  firstName: string;
  lastName: string;
  userEmail: string;
  role: string;
};

export const generateToken = (user: userLog, expiration: string) => {
  try {
    return jwt.sign(user, PRIVATE_KEY as string, { expiresIn: expiration });
  } catch (error) {
    console.error('Token Generation Error:', error);
    throw error;
  }
};
