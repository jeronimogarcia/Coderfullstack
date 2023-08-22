import { Model, Schema, Types, model, models } from 'mongoose';
import { ProductProps } from './product';

export interface CarritosProps {
  products: {
    product: Types.ObjectId | ProductProps;
    quantity: number;
  }[];
  status: CartStatusEnum;
}

export enum CartStatusEnum {
  PENDING = 'pending',
  PAID = 'paid',
}

const productSchema = new Schema<CarritosProps>({
  products: [
    {
      product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
  status: { type: String, enum: Object.values(CartStatusEnum), required: true },
});

export default (models.Product as Model<CarritosProps>) || model<CarritosProps>('Carritos', productSchema);
