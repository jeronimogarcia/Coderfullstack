import Usuarios from '../models/usuarios';
import { addUserObj } from '../types/addUserObj';

export const addUser = async (user: addUserObj) => {
  return await Usuarios.create(user);
};

export const findUserByEmail = async (filter: Record<string, unknown>) => {
  return await Usuarios.find(filter);
};