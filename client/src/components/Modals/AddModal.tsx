import { FC, useContext } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import Select from "react-select";

const options = [
  { value: "alimento", label: "alimento" },
  { value: "fruit", label: "fruit" },
];

const AddModal: FC = (): JSX.Element => {
  const { addObject, setAddObject } = useContext<ProductTableAdminContext>(
    ProductTableAdminContext
  );
  return (
    <div>
      <>
        <section style={{ padding: "5px" }}>
          <div>
            <strong style={{ fontSize: "14px" }}>Product name:</strong>
            <MDBInput
              style={{ marginTop: "5px", marginBottom: "10px" }}
              label="name..."
              type="text"
              onChange={(e) =>
                setAddObject({ ...addObject, title: e.target.value })
              }
            ></MDBInput>
          </div>
          <div>
            <strong style={{ fontSize: "14px" }}>Product description:</strong>
            <MDBInput
              style={{ marginTop: "5px", marginBottom: "10px" }}
              label="description..."
              type="text"
              onChange={(e) =>
                setAddObject({ ...addObject, description: e.target.value })
              }
            ></MDBInput>
          </div>
          <div>
            <strong style={{ fontSize: "14px" }}>Product category:</strong>
            <Select
              options={options}
              onChange={(e) =>
                setAddObject({ ...addObject, category: e.value })
              }
            />
          </div>
          <div>
            <strong style={{ fontSize: "14px" }}>Product price:</strong>
            <MDBInput
              style={{ marginTop: "5px", marginBottom: "10px" }}
              label="price..."
              type="number"
              onChange={(e) =>
                setAddObject({
                  ...addObject,
                  price: Number(e.target.value),
                })
              }
            ></MDBInput>
          </div>
          <div>
            <strong style={{ fontSize: "14px" }}>Product stock:</strong>
            <MDBInput
              style={{ marginTop: "5px", marginBottom: "10px" }}
              label="stock..."
              type="number"
              onChange={(e) =>
                setAddObject({
                  ...addObject,
                  stock: Number(e.target.value),
                })
              }
            ></MDBInput>
          </div>
          <div style={{ marginTop: "20px" }}>All inputs are required</div>
        </section>
      </>
    </div>
  );
};

export default AddModal;
