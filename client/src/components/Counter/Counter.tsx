import { MDBIcon } from "mdb-react-ui-kit";
import { FC } from "react";
import CustomButton from "../Buttons/CustomButton";

type Props = {
  maxValue: number;
  handleCounter: (a: string, b: number) => void;
  counter: number;
};

const Counter: FC<Props> = ({
  maxValue,
  handleCounter,
  counter,
}): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          width: "60px",
          marginRight: "10px",
        }}
      >
        <CustomButton
          onClick={() => handleCounter("add", maxValue)}
          label={<MDBIcon fas icon="plus" />}
        />
      </span>
      <span
        style={{
          marginRight: "10px",
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
        }}
      >
        {counter}
      </span>
      <span
        style={{ display: "flex", justifyContent: "center", width: "60px" }}
      >
        <CustomButton
          onClick={() => handleCounter("substract", maxValue)}
          label={<MDBIcon fas icon="minus" />}
        />
      </span>
    </div>
  );
};

export default Counter;
