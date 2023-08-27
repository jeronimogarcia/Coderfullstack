import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { ProductTableAdminContextProvider } from "./context/ProductTableAdminContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <ProductTableAdminContextProvider>
          <App />
        </ProductTableAdminContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
