import { FC } from "react";
import AllProductsFetch from "./components/Products/AllProductsFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProductsFetch />}></Route>
        <Route path="/admin/products" element={<AllProductsFetch />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
