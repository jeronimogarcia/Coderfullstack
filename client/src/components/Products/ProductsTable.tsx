import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FC, useContext } from "react";
import { IProduct } from "../../types/Product";
import CustomButton from "../Buttons/CustomButton";
import UserTableModalContainer from "../Modals/UserTableModalContainer";
import CartContext from "../../context/CartContext";

type Props = {
  products: IProduct[];
};

const ProductsTable: FC<Props> = ({ products }): JSX.Element => {
  const { setTableAddToCartModal, setProductInCart } =
    useContext<CartContext>(CartContext);
  return (
    <div style={{ justifyContent: "center" }}>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Products List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <section
          style={{
            padding: "10px",
            border: "1px solid lightblue",
            borderRadius: "20px",
            width: "75%",
          }}
        >
          <MDBTable striped align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col" style={{ width: "20px" }}></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {products.map((product: IProduct) => (
                <tr key={product.title}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}u</td>
                  <td>
                    <CustomButton
                      onClick={() => {
                        setTableAddToCartModal(true);
                        setProductInCart(product);
                      }}
                      label="Add"
                    />
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </section>
      </div>
      <UserTableModalContainer />
    </div>
  );
};

export default ProductsTable;
