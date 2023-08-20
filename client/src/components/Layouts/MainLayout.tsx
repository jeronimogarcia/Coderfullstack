import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";

type Props = {
  children: JSX.Element;
};

const MainLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <Navbar />
      {children}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
