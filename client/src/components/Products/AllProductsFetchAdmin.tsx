import { FC, useEffect, useContext } from "react";
import MainLayout from "../Layouts/MainLayout";
import ProductsTableAdmin from "./ProductsTableAdmin";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";

const AllProductsFetch: FC = (): JSX.Element => {
  const { productsAdmin, fetchProductsAdmin } =
    useContext<ProductTableAdminContext>(ProductTableAdminContext);

  useEffect(() => {
    fetchProductsAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      {productsAdmin && <ProductsTableAdmin products={productsAdmin} />}
    </MainLayout>
  );
};

export default AllProductsFetch;
