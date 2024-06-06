import { Button, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import JasaTree from "./JasaTree";
import { Input, Label } from "reactstrap";
const validation = () => {
  return Yup.object().shape({});
};

const PaymentCreateModalLain = ({
  show,
  handleClose,
  append,
  jenisPermohonan,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(validation()),
    defaultValues: {
      kode: "",
      kode_simponi: "",
      uraian: "",
      tarif: "",
    },
  });
  console.log(errors);
  const onSubmit = (values) => {
    append({
      kode: values.kode,
      kode_simponi: values.kode_simponi,
      uraian: values.uraian,
      tarif: values.tarif,
    });
    handleClose();
  };
  const [selected, setSelected] = useState();
  const [search, setSearch] = useState("");

  return (
    <Modal className="modal-xl" show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Jasa Lain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-2">
            <Col sm={12}>
              <Label>Cari tarif</Label>
              <Input
                placeholder="search here.."
                value={search}
                onChange={(e) => setSearch(e?.target?.value)}
              />
            </Col>
            <Col sm={12}>
              <label>Pilih tarif</label>
              <JasaTree
                jenisPermohonan={jenisPermohonan}
                reset={reset}
                onSelect={setSelected}
                className="border rounded p-2"
              />
              {/* <QuarantineTree
                jenisPermohonan={jenisPermohonan}
                reset={reset}
                onSelect={setSelected}
                className="border rounded p-2"
              /> */}
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="d-flex flex-column">
              <label>Kode Tarif</label>
              <input disabled className="form-control" {...register("kode")} />
            </Col>
            <Col sm={4} className="d-flex flex-column">
              <label>Tarif</label>
              <input disabled className="form-control" {...register("tarif")} />
            </Col>
            <Col sm={4} className="d-flex flex-column">
              <label>Satuan</label>
              <input
                disabled
                className="form-control"
                value={selected?.satuan}
              />
            </Col>

            <Col sm={4} className="d-none">
              <input
                disabled
                className="form-control"
                {...register("kode_simponi")}
              />
            </Col>
            <Col sm={4} className="d-none">
              <input
                disabled
                className="form-control"
                {...register("uraian")}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="d-flex flex-column">
              <label>Frekuensi</label>
              <input
                className="form-control"
                placeholder="Frekuensi"
                type="number"
              />
            </Col>
            <Col sm={4} className="d-flex flex-column">
              <label>Volume</label>
              <input className="form-control" placeholder="Volume" />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
export default PaymentCreateModalLain;
