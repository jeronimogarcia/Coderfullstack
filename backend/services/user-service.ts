import * as repo from '../repositories/user.repository';
import { addUserObj } from '../types/addUserObj';
import { matchPassword } from '../utils/matchPassword';

export const addUser = async (user: addUserObj): Promise<any> => {
  const filter = { email: user.email };
  const getUser = await repo.findUserByEmail(filter);
  if (getUser) return null;
  try {
    return await repo.addUser(user);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginUser = async (user: addUserObj): Promise<any> => {
  const filter = { email: user.email };
  try {
    const getUser = await repo.findUserByEmail(filter);
    if (getUser && (await matchPassword(user.password, getUser.password))) {
      const userWithoutPassword = { ...getUser.toObject(), password: undefined };
      return userWithoutPassword;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error during logging', error);
    return null;
  }
};
