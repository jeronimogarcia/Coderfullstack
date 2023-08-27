import { RequestHandler } from 'express';
import * as service from '../services/user-service';
import { ok, notFound } from './base-controller';
import { UsuariosProps } from '../models/usuarios';
import { generateToken } from '../auth/cookies';

export const executeAddUser: RequestHandler = async (req, res): Promise<any> => {
  const { body } = req;
  const user = await service.addUser(body);
  return !!user ? ok<UsuariosProps>(res, user) : notFound(res);
};

export const executeLoginUser: RequestHandler = async (req, res): Promise<any> => {
  const { body } = req;
  const user = await service.loginUser(body);

  if (user) {
    const date = new Date();
    const token = generateToken(user._id, '24h');

    res.cookie('coder_login_token', token, {
      maxAge: date.setDate(date.getDate() + 1),
      secure: false,
      httpOnly: true,
    });

    ok<any>(res, { user, token });
  } else {
    notFound(res);
  }
};
