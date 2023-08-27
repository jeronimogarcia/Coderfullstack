import { FC } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
const Navbar: FC = (): JSX.Element => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb style={{ fontWeight: 500 }}>
            <MDBBreadcrumbItem>
              <Link to="/">Home</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link to="/admin/products">Product Manager</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current="page">
              <Link to="/register">Register</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current="page">
              <Link to="/login">Login</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current="page">
              <Link to="/cart">Cart</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
