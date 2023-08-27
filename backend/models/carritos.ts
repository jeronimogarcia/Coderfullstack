import { Model, Schema, Types, model, models } from 'mongoose';
import { ProductProps } from './product';
import { UsuariosProps } from './usuarios';

export interface CarritosProps {
  user: Types.ObjectId | UsuariosProps;
  cart: {
    product: Types.ObjectId | ProductProps;
    quantity: number;
  }[];
  // status: CartStatusEnum;
}

// export enum CartStatusEnum {
//   PENDING = 'pending',
//   PAID = 'paid',
// }

const productSchema = new Schema<CarritosProps>({
  user: { type: Schema.Types.ObjectId, ref: 'Usuarios' },
  cart: [
    {
      product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
  // status: { type: String, enum: Object.values(CartStatusEnum), required: true },
});

export default (models.Carritos as Model<CarritosProps>) || model<CarritosProps>('Carritos', productSchema);
