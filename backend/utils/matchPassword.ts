import bcrypt from 'bcryptjs';

export const matchPassword = async (password: string, passToCompare: string) => {
  return await bcrypt.compare(password, passToCompare);
};
