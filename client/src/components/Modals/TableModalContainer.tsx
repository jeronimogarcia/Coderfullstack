import MainModal from "./MainModal";
import { MDBBtn } from "mdb-react-ui-kit";
import EditModal from "./EditModal";
import { useContext } from "react";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import DeleteModal from "./DeleteModal";

const TableModalContainer = () => {
  const {
    tableEditModal,
    setTableEditModal,
    editProduct,
    tableDeleteModal,
    setTableDeleteModal,
    deleteProduct,
  } = useContext<ProductTableAdminContext>(ProductTableAdminContext);
  return (
    <div>
      {tableEditModal && (
        <MainModal
          showModal={tableEditModal}
          setShowModal={setTableEditModal}
          title="Edit Product"
          buttons={[
            <MDBBtn key={"edit button"} onClick={editProduct}>
              Edit
            </MDBBtn>,
          ]}
        >
          <EditModal />
        </MainModal>
      )}
      {tableDeleteModal && (
        <MainModal
          showModal={tableDeleteModal}
          setShowModal={setTableDeleteModal}
          title="Delete Product"
          buttons={[
            <MDBBtn color="danger" key={"edit button"} onClick={deleteProduct}>
              Delete
            </MDBBtn>,
          ]}
        >
          <DeleteModal />
        </MainModal>
      )}
    </div>
  );
};

export default TableModalContainer;
