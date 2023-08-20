import { FC, useCallback, useContext, useEffect, useState } from "react";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import { IProduct } from "../../types/Product";
import axios from "axios";
import {
  MDBInput,
  MDBSpinner,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

const EditModal: FC = (): JSX.Element => {
  const [product, setProduct] = useState<IProduct>(null);
  const [isLoading, setIsLoading] = useState(null);
  const { editId, editObject, setEditObject } =
    useContext<ProductTableAdminContext>(ProductTableAdminContext);

  const getProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/products/${editId}`
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [editId]);

  useEffect(() => {
    getProduct();
    setEditObject(null);
  }, [getProduct, setEditObject]);

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
          <section style={{ padding: "5px" }}>
            <div>
              <strong style={{ fontSize: "14px" }}>Edit product name:</strong>
              <MDBInput
                style={{ marginTop: "5px", marginBottom: "10px" }}
                label="name..."
                type="text"
                onChange={(e) =>
                  setEditObject({ ...editObject, title: e.target.value })
                }
              ></MDBInput>
            </div>
            <div>
              <strong style={{ fontSize: "14px" }}>Edit product price:</strong>
              <MDBInput
                style={{ marginTop: "5px", marginBottom: "10px" }}
                label="price..."
                type="number"
                onChange={(e) =>
                  setEditObject({
                    ...editObject,
                    price: Number(e.target.value),
                  })
                }
              ></MDBInput>
            </div>
            <div>
              <strong style={{ fontSize: "14px" }}>Edit product stock:</strong>
              <MDBInput
                style={{ marginTop: "5px", marginBottom: "10px" }}
                label="stock..."
                type="number"
                onChange={(e) =>
                  setEditObject({
                    ...editObject,
                    stock: Number(e.target.value),
                  })
                }
              ></MDBInput>
            </div>
            <div style={{ marginTop: "20px" }}>All inputs are optionals</div>
          </section>
        </>
      ) : (
        <div
          style={{
            height: "403px",
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

export default EditModal;
