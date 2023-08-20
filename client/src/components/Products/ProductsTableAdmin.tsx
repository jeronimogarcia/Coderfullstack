import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FC, useContext } from "react";
import { IProduct } from "../../types/Product";
import CustomButton from "../Buttons/CustomButton";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import TableModalContainer from "../Modals/TableModalContainer";

type Props = {
  products: IProduct[];
};

const ProductsTable: FC<Props> = ({ products }): JSX.Element => {
  const { setTableEditModal, setEditId, setTableDeleteModal, setDeleteId } =
    useContext<ProductTableAdminContext>(ProductTableAdminContext);
  return (
    <div style={{ justifyContent: "center" }}>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Products List - ADMIN
      </h1>
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
                <th scope="col" style={{ width: "50px" }}>
                  Price
                </th>
                <th scope="col" style={{ width: "50px" }}>
                  Stock
                </th>
                <th scope="col" style={{ width: "50px" }}>
                  Edit
                </th>
                <th scope="col" style={{ width: "50px" }}>
                  Delete
                </th>
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
                        setTableEditModal(true);
                        setEditId(product._id);
                      }}
                      label="Edit"
                    />
                  </td>
                  <td>
                    <CustomButton
                      onClick={() => {
                        setTableDeleteModal(true);
                        setDeleteId(product._id);
                      }}
                      label="Delete"
                      color="danger"
                    />
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
          <TableModalContainer />
        </section>
      </div>
    </div>
  );
};

export default ProductsTable;
