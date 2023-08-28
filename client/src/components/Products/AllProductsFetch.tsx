import { FC, useEffect, useContext } from "react";
import ProductsTable from "./ProductsTable";
import MainLayout from "../Layouts/MainLayout";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import AuthContext from "../../context/AuthContext";
import { checkUser } from "../../utils/checkUser";

const AllProductsFetch: FC = (): JSX.Element => {
  const { products, fetchProducts } = useContext<ProductTableAdminContext>(
    ProductTableAdminContext
  );

  const { userContext } = useContext<AuthContext>(AuthContext);

  useEffect(() => {
    checkUser(userContext);
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userContext && (
        <MainLayout>
          {products && <ProductsTable products={products} />}
        </MainLayout>
      )}
    </>
  );
};

export default AllProductsFetch;
