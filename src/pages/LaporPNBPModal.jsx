import { Button, ModalBody, ModalHeader } from "react-bootstrap";
import { Modal, ModalFooter } from "reactstrap";
import { useAddReqBill } from "../hooks/useReqBill";

const LaporPNBPModal = ({ isOpen, onClose, data }) => {
  const { mutateAsync, isPending } = useAddReqBill();
  const handleSubmit = async () => {
    const json = {
      kuitansi: data?.map((item) => ({ id: item?.id })),
    };
    const response = await mutateAsync(json);
    if (response?.status == 200) {
      onClose();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Modal isOpen={isOpen} toggle={onClose}>
        <ModalHeader>Lapor PNBP Barantin</ModalHeader>
        <ModalBody>Apakah Anda yakin melaporkan penerimaan?</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button
            disabled={isPending}
            onClick={() => handleSubmit()}
            variant="danger"
            type="submit"
          >
            Simpan
          </Button>
        </ModalFooter>
      </Modal>
    </form>
  );
};
export default LaporPNBPModal;
