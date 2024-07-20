import { Button, ModalBody, ModalHeader } from "react-bootstrap";
import { Modal, ModalFooter } from "reactstrap";
import { useReqBilling } from "../hooks/useReqBill";

const LaporPNBPModal = ({ isOpen, onClose, data }) => {
  const { mutateAsync, isPending } = useReqBilling();
  const handleSubmit = async () => {
    let dataid = data?.map((item) => {return item?.id })
    const dataJson = {
      id: dataid,
      // kode_upt: "10",
      kode_upt: data[0]?.upt_id?.slice(0, 2),
      jenis_karantina: data[0]?.jenis_karantina
    }
    // console.log(dataJson)
    const response = await mutateAsync(dataJson);
    console.log(response)
    // if (response?.status == 200) {
    //   onClose();
    // }
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
