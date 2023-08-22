import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsFetch from "./components/Products/AllProductsFetch";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProductsFetch />}></Route>
        <Route path="/admin/products" element={<AllProductsFetch />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
