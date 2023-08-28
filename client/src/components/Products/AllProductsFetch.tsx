import { FC, useEffect, useContext } from "react";
import ProductsTable from "./ProductsTable";
import MainLayout from "../Layouts/MainLayout";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";

const AllProductsFetch: FC = (): JSX.Element => {
  const { products, fetchProducts } = useContext<ProductTableAdminContext>(
    ProductTableAdminContext
  );

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>{products && <ProductsTable products={products} />}</MainLayout>
  );
};

export default AllProductsFetch;
