import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IUser } from "../types/User";
import { ProductInCart } from "../types/Cart";
import { IProduct } from "../types/Product";
import { toast } from "react-toastify";
import axios from "axios";
import AuthContext from "./AuthContext";

interface CartContext {
  userContext: IUser;
  setUserContext: Dispatch<SetStateAction<IUser>>;
  tableAddToCartModal: boolean;
  setTableAddToCartModal: Dispatch<SetStateAction<boolean>>;
  productInCart: IProduct;
  setProductInCart: Dispatch<SetStateAction<IProduct>>;
  handleCounter: () => void;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  addToCart: () => void;
  cartProducts: ProductInCart[];
  setCartProducts: Dispatch<SetStateAction<ProductInCart>>;
  saveCart: () => void;
}

const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [tableAddToCartModal, setTableAddToCartModal] = useState(null);
  const [productInCart, setProductInCart] = useState<IProduct>(null);
  const [counter, setCounter] = useState(0);
  const [cartProducts, setCartsProducts] = useState<ProductInCart[]>([]);
  const { userContext } = useContext<AuthContext>(AuthContext);

  const handleCounter = (operator: string, maxValue: number) => {
    if (operator === "add" && counter < maxValue) {
      setCounter((prev) => prev + 1);
    }
    if (operator === "substract" && counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    if (counter === 0) return null;
    const findIndexProduct = cartProducts.findIndex(
      (p) => p.product._id === productInCart._id
    );

    if (findIndexProduct > -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[findIndexProduct].quantity += counter;
      setCartsProducts(updatedCartProducts);
      toast.success("Cantidad de producto agregada");
    } else {
      setCartsProducts([
        ...cartProducts,
        { product: productInCart, quantity: counter },
      ]);
      toast.success("Producto agregado al carrito");
    }
    setTableAddToCartModal(false);
  };

  const saveCart = async () => {
    if (cartProducts.length < 1) return null;
    const cartToAdd = cartProducts.map((p) => {
      return { product: p.product._id, quantity: p.quantity };
    });
    try {
      await axios.post(
        `http://localhost:5000/cart/add/${userContext._id}`,
        cartToAdd
      );
      toast.success("Carrito guardado en la base de datos");
      setCartsProducts([]);
    } catch (error) {
      console.log(error);
      toast.success("Error al guardar carrito");
    }
  };

  return (
    <CartContext.Provider
      value={{
        tableAddToCartModal,
        setTableAddToCartModal,
        productInCart,
        setProductInCart,
        handleCounter,
        counter,
        setCounter,
        addToCart,
        cartProducts,
        setCartsProducts,
        saveCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
