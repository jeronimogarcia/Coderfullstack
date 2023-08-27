export interface Iproduct {
  product: string;
  quantity: number;
}

export interface addCartObject {
  user: string;
  cart: Iproduct[];
}
