import MainModal from "./MainModal";
import { MDBBtn } from "mdb-react-ui-kit";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import AddToCartModal from "./AddToCartModal";

const UserTableModalContainer = () => {
  const { tableAddToCartModal, setTableAddToCartModal, addToCart } =
    useContext<CartContext>(CartContext);
  return (
    <div>
      {tableAddToCartModal && (
        <MainModal
          showModal={tableAddToCartModal}
          setShowModal={setTableAddToCartModal}
          title="Add Product to Cart"
          buttons={[
            <MDBBtn
              color="success"
              key={"addToCart button"}
              onClick={addToCart}
            >
              Add To Cart
            </MDBBtn>,
          ]}
        >
          <AddToCartModal />
        </MainModal>
      )}
    </div>
  );
};

export default UserTableModalContainer;
