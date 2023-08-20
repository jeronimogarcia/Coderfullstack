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

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const editProduct = async () => {
    try {
      await axios.post(
        `http://localhost:5000/products/edit/${editId}`,
        editObject
      );
      toast.success("Producto editado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al editar");
    } finally {
      setEditId(null);
      setTableEditModal(null);
      fetchProducts();
    }
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:5000/products/delete/${editId}`);
      toast.success("Producto eliminado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al eliminar");
    } finally {
      setDeleteId(null);
      setTableDeleteModal(null);
      fetchProducts();
    }
  };

  const addProduct = async () => {
    try {
      await axios.post(`http://localhost:5000/products/add`, addObject);
      toast.success("Producto creado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al crear producto");
    } finally {
      setTableAddModal(null);
      fetchProducts();
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
      }}
    >
      {children}
    </ProductTableAdminContext.Provider>
  );
};

export default ProductTableAdminContext;
