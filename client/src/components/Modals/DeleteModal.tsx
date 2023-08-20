import { FC, useCallback, useContext, useEffect, useState } from "react";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import { IProduct } from "../../types/Product";
import axios from "axios";
import {
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

const DeleteModal: FC = (): JSX.Element => {
  const [product, setProduct] = useState<IProduct>(null);
  const [isLoading, setIsLoading] = useState(null);
  const { deleteId } = useContext<ProductTableAdminContext>(
    ProductTableAdminContext
  );

  const getProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/products/${deleteId}`
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [deleteId]);

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
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.stock}u</td>
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

export default DeleteModal;
