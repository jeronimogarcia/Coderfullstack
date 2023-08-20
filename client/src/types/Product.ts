export interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  stock: number;
}

export enum ProductCategory {
  FRUIT = "fruit",
  ALIMENTO = "alimento",
}
