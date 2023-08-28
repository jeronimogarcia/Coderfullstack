import { FC, useEffect, useContext } from "react";
import MainLayout from "../Layouts/MainLayout";
import ProductsTableAdmin from "./ProductsTableAdmin";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";
import AuthContext from "../../context/AuthContext";
import { checkUser } from "../../utils/checkUser";

const AllProductsFetch: FC = (): JSX.Element => {
  const { productsAdmin, fetchProductsAdmin } =
    useContext<ProductTableAdminContext>(ProductTableAdminContext);

  const { userContext } = useContext<AuthContext>(AuthContext);

  useEffect(() => {
    checkUser(userContext);
    fetchProductsAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userContext && (
        <MainLayout>
          {productsAdmin && <ProductsTableAdmin products={productsAdmin} />}
        </MainLayout>
      )}
    </>
  );
};

export default AllProductsFetch;
