import { RequestHandler } from 'express';
import * as service from '../services/user-service';
import { ok, notFound } from './base-controller';
import { UsuariosProps } from '../models/usuarios';

export const executeAddUser: RequestHandler = async (req, res): Promise<any> => {
  const { body } = req;
  const user = await service.addUser(body);
  return !!user ? ok<UsuariosProps>(res, user) : notFound(res);
};
