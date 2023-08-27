import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import UserTableModalContainer from "../Modals/UserTableModalContainer";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { ProductInCart } from "../../types/Cart";
import MainLayout from "../Layouts/MainLayout";
import CustomButton from "../Buttons/CustomButton";

const CartView = () => {
  const { cartProducts, saveCart } = useContext<CartContext>(CartContext);

  const calculateTotal = () => {
    const total = cartProducts.reduce(
      (acc, currentValue) =>
        acc + currentValue.product.price * currentValue.quantity,
      0
    );
    return `$${total}`;
  };

  return (
    <MainLayout>
      <div style={{ justifyContent: "center" }}>
        <h1 style={{ textAlign: "center", marginTop: "40px" }}>Cart List</h1>
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
                  <th scope="col">SubTotal</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <>
                  {cartProducts.map((productInCart: ProductInCart) => (
                    <tr key={productInCart.product._id}>
                      <td>{productInCart.product.title}</td>
                      <td>${productInCart.product.price}</td>
                      <td>{productInCart.quantity}</td>
                      <td>
                        ${productInCart.quantity * productInCart.product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{calculateTotal()}</td>
                  </tr>
                </>
              </MDBTableBody>
            </MDBTable>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px",
              }}
            >
              <CustomButton
                onClick={() => {
                  saveCart();
                }}
                width="150px"
                label="Confirm Cart"
                color="primary"
              />
            </div>
          </section>
        </div>
        <UserTableModalContainer />
      </div>
    </MainLayout>
  );
};

export default CartView;
