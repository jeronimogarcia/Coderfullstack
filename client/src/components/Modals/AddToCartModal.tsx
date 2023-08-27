import { FC, useCallback, useContext, useEffect, useState } from "react";
import { IProduct } from "../../types/Product";
import axios from "axios";
import {
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import CartContext from "../../context/CartContext";
import Counter from "../Counter/Counter";

const AddToCartModal: FC = (): JSX.Element => {
  const [product, setProduct] = useState<IProduct>(null);
  const [isLoading, setIsLoading] = useState(null);
  const { productInCart, handleCounter, counter, setCounter } =
    useContext<CartContext>(CartContext);

  const getProduct = useCallback(async () => {
    setCounter(0);
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/products/${productInCart._id}`
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productInCart]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div>
      {product && !isLoading ? (
        <>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col" style={{ width: "210px" }}>
                  Quantity
                </th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.stock}u</td>
                <td>
                  <Counter
                    counter={counter}
                    handleCounter={handleCounter}
                    maxValue={product.stock}
                  />
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </>
      ) : (
        <div
          style={{
            height: "128px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBSpinner
            style={{ width: "3rem", height: "3rem" }}
            color="primary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      )}
    </div>
  );
};

export default AddToCartModal;
