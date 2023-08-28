import { createContext, useState, Dispatch, SetStateAction } from "react";
import { IProduct } from "../types/Product";
import axios from "axios";
import { toast } from "react-toastify";

interface ProductTableAdminContext {
  tableEditModal: boolean;
  setTableEditModal: Dispatch<SetStateAction<boolean>>;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  editObject: EditObject;
  setEditObject: Dispatch<SetStateAction<EditObject>>;
  editProduct: () => void;
  fetchProducts: () => void;
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  deleteId: string;
  setDeleteId: Dispatch<SetStateAction<string>>;
  tableDeleteModal: boolean;
  setTableDeleteModal: Dispatch<SetStateAction<boolean>>;
  deleteProduct: () => void;
  tableAddModal: boolean;
  setTableAddModal: Dispatch<SetStateAction<boolean>>;
  addObject: AddObject;
  setAddObject: Dispatch<SetStateAction<AddObject>>;
  addProduct: () => void;
  fetchProductsAdmin: () => void;
  productsAdmin: IProduct[];
  setProductsAdmin: Dispatch<SetStateAction<IProduct[]>>;
}

export type EditObject = {
  title: string;
  price: number;
  stock: number;
};

export type AddObject = {
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
};

const ProductTableAdminContext = createContext(null);

export const ProductTableAdminContextProvider = ({ children }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [tableEditModal, setTableEditModal] = useState(false);
  const [tableDeleteModal, setTableDeleteModal] = useState(false);
  const [tableAddModal, setTableAddModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [editObject, setEditObject] = useState<EditObject>({
    title: "",
    price: null,
    stock: null,
  });
  const [addObject, setAddObject] = useState<AddObject>({
    title: "",
    description: "",
    category: "",
    price: null,
    stock: null,
  });
  const [products, setProducts] = useState([]);
  const [productsAdmin, setProductsAdmin] = useState([]);

  const fetchProducts = async () => {
    const token = localStorage.getItem("TOKEN");
    try {
      const { data } = await axios.get(`http://localhost:5000/products`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProductsAdmin = async () => {
    const token = localStorage.getItem("TOKEN");
    try {
      const { data } = await axios.get(`http://localhost:5000/products/admin`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProductsAdmin(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const editProduct = async () => {
    const token = localStorage.getItem("TOKEN");
    try {
      await axios.post(
        `http://localhost:5000/products/edit/${editId}`,
        editObject,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Producto editado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al editar");
    } finally {
      setEditId(null);
      setTableEditModal(null);
      fetchProductsAdmin();
    }
  };

  const deleteProduct = async () => {
    const token = localStorage.getItem("TOKEN");
    try {
      await axios.delete(`http://localhost:5000/products/delete/${deleteId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Producto eliminado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al eliminar");
    } finally {
      setDeleteId(null);
      setTableDeleteModal(null);
      fetchProductsAdmin();
    }
  };

  const addProduct = async () => {
    const token = localStorage.getItem("TOKEN");
    try {
      await axios.post(`http://localhost:5000/products/add`, addObject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Producto creado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al crear producto");
    } finally {
      setTableAddModal(null);
      fetchProductsAdmin();
    }
  };

  return (
    <ProductTableAdminContext.Provider
      value={{
        data,
        setData,
        tableEditModal,
        setTableEditModal,
        editId,
        setEditId,
        editObject,
        setEditObject,
        editProduct,
        fetchProducts,
        products,
        setProducts,
        deleteId,
        setDeleteId,
        tableDeleteModal,
        setTableDeleteModal,
        deleteProduct,
        tableAddModal,
        setTableAddModal,
        addObject,
        setAddObject,
        addProduct,
        fetchProductsAdmin,
        productsAdmin,
        setProductsAdmin,
      }}
    >
      {children}
    </ProductTableAdminContext.Provider>
  );
};

export default ProductTableAdminContext;
