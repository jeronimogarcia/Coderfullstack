import { Model, Schema, model, models } from 'mongoose';

export interface ProductProps {
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  stock: number;
}

export enum ProductCategory {
  FRUIT = 'fruit',
  ALIMENTO = 'alimento',
}

const productSchema = new Schema<ProductProps>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: Object.values(ProductCategory), required: true },
  stock: { type: Number, required: true },
});

export default (models.Product as Model<ProductProps>) || model<ProductProps>('Product', productSchema);
