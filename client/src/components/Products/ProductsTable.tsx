import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FC } from "react";
import { IProduct } from "../../types/Product";

type Props = {
  products: IProduct[];
};

const ProductsTable: FC<Props> = ({ products }): JSX.Element => {
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
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {products.map((product: IProduct) => (
                <tr key={product.title}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}u</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </section>
      </div>
    </div>
  );
};

export default ProductsTable;
