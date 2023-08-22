import { Model, Schema, Types, model, models } from 'mongoose';
import { CarritosProps } from './carritos';
import bcrypt from 'bcryptjs';

export interface UsuariosProps {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role?: UsersRoleEnum;
  carts?: (Types.ObjectId | CarritosProps)[];
  created?: Date;
}

export enum UsersRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

const productSchema = new Schema<UsuariosProps>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: Object.values(UsersRoleEnum) },
  carts: [{ type: Schema.Types.ObjectId, ref: 'Carritos' }],
  created: { type: Date },
});

productSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.role = UsersRoleEnum.USER;
  this.carts = [];
  this.created = new Date();
});

export default (models.Usuarios as Model<UsuariosProps>) || model<UsuariosProps>('Usuarios', productSchema);
