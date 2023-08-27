import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../src/server';
import { RequestHandler } from 'express';

export const generateToken = (id: string, expiration: string) => {
  try {
    return jwt.sign({ id: id.toString() }, JWT_SECRET as string, { expiresIn: expiration });
  } catch (error) {
    console.error('Token Generation Error:', error);
    throw error;
  }
};

interface CustomRequest extends Request {
  user: any;
}

export const authToken: RequestHandler = (req, res, next) => {
  // El token llega en el header de autorización
  const authHeader = req.headers.authorization; // req.headers['authorization']

  // Si no hay authorization headers es porque no se envió token, no se puede continuar
  if (!authHeader) return res.status(403).send({ err: 'Se requiere autenticación' });

  // El token llega antecedido de la palabra Bearer, aplicando split separamos por el espacio
  // y tomamos directamente el 2do elemento del array que genera, que es el token.
  const token = authHeader.split(' ')[1];
  jwt.verify(token, JWT_SECRET as string, (err, credentials) => {
    // Si hay error es porque el token no es válido o expiró
    if (err) return res.status(403).send({ err: 'Se requiere autenticación' });

    // Si está todo ok, asignamos los datos de usuario y continuamos
    (req as unknown as CustomRequest).user = (credentials as any).user;
    next();
  });
};
