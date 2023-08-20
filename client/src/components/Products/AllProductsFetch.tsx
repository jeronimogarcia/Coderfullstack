import { FC, useEffect, useContext } from "react";
import ProductsTable from "./ProductsTable";
import MainLayout from "../Layouts/MainLayout";
import { useLocation } from "react-router-dom";
import ProductsTableAdmin from "./ProductsTableAdmin";
import ProductTableAdminContext from "../../context/ProductTableAdminContext";

const AllProductsFetch: FC = (): JSX.Element => {
  const { products, fetchProducts } = useContext<ProductTableAdminContext>(
    ProductTableAdminContext
  );
  const router = useLocation().pathname.split("/")[1];

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      {products && router === "admin" ? (
        <ProductsTableAdmin products={products} />
      ) : (
        <ProductsTable products={products} />
      )}
    </MainLayout>
  );
};

export default AllProductsFetch;
