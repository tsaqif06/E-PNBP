import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessAlert = ({
  show = false,
  title = "",
  path = "",
  backTitle = "Kembali",
}) => {
  return (
    <Modal show={show}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Link to={path}>{backTitle}</Link>
      </ModalBody>
    </Modal>
  );
};
export default SuccessAlert;
