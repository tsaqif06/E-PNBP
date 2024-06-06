import { Button, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";
const validation = () => {
  return Yup.object().shape({
    no_pemohon: Yup.string().required("Field tidak boleh kosong"),
    no_spdd: Yup.string().required("Field tidak boleh kosong"),
    keterangan: Yup.string(),
    nominal: Yup.number().required("Field tidak boleh kosong"),
  });
};
const PaymentCreateModalPerjadin = ({ show, handleClose, append }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation()),
    defaultValues: {
      no_pemohon: "",
      no_spdd: "",
      keterangan: "",
      nominal: "",
    },
  });
  console.log(errors);
  const onSubmit = (values) => {
    append({
      no_pemohon: values?.no_pemohon,
      no_spdd: values?.no_spdd,
      keterangan: values?.keterangan,
      nominal: values?.nominal,
    });
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Jasa Perjadin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2">
          <Col>
            <div className="form-group">
              <label>No Pemohon</label>
              <input
                className="form-control"
                type="text"
                {...register("no_pemohon")}
              />
            </div>
            <div>
              <label>No SPPD</label>
              <input
                className="form-control"
                type="text"
                {...register("no_spdd")}
              />
            </div>

            <div>
              <label>Nominal</label>
              <input
                className="form-control"
                type="number"
                {...register("nominal")}
              />
            </div>
            <div>
              <label>Keterangan</label>
              <textarea
                className="form-control"
                type="text"
                {...register("keterangan")}
              />
            </div>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
export default PaymentCreateModalPerjadin;
