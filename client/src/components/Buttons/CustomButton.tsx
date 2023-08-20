import { MDBBtn } from "mdb-react-ui-kit";
import { FC } from "react";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark"
    | "muted"
    | "white"
    | "info"
    | "none"
    | "link";
  width?: string;
  onClick?: () => void;
};

const CustomButton: FC<Props> = ({
  label,
  color = "primary",
  width = "100px",
  onClick,
}): JSX.Element => {
  return (
    <MDBBtn onClick={onClick} style={{ width: width }} color={color}>
      {label}
    </MDBBtn>
  );
};

export default CustomButton;
