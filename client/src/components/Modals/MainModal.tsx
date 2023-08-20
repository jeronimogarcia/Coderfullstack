import { FC, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children?: JSX.Element | never[];
  buttons?: JSX.Element[];
  buttonCloseLabel?: string;
  footerBorderTop?: string;
  buttonsPosition?: string;
  border?: string;
  topPosition?: string;
}

const ModalComponent: FC<Props> = ({
  showModal,
  setShowModal,
  title,
  children,
  buttons,
  buttonCloseLabel = "Cancel",
  footerBorderTop,
  buttonsPosition,
  border,
  topPosition,
}): JSX.Element => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <>
      {isBrowser && (
        <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
          <MDBModalDialog size="lg">
            <MDBModalContent style={{ border: border, top: topPosition }}>
              {title && (
                <MDBModalHeader>
                  <h5>{title}</h5>
                </MDBModalHeader>
              )}
              {children && <MDBModalBody>{children}</MDBModalBody>}
              <MDBModalFooter
                style={{
                  borderTop: footerBorderTop,
                  justifyContent: buttonsPosition,
                }}
              >
                {buttons &&
                  buttons.map((b, index) => <div key={index}>{b}</div>)}
                <MDBBtn
                  style={{ minWidth: "95px" }}
                  onClick={() => setShowModal(false)}
                >
                  {buttonCloseLabel}
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
    </>
  );
};

export default ModalComponent;
