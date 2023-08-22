import * as repo from '../repositories/user.repository';
import { addUserObj } from '../types/addUserObj';

export const addUser = async (user: addUserObj): Promise<any> => {
  const filter = { email: user.email };
  const getUser = await repo.findUserByEmail(filter);
  console.log(getUser);
  if (getUser.length > 0) return null;
  try {
    return await repo.addUser(user);
  } catch (error) {
    console.log(error);
    return null;
  }
};
