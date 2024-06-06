import { Button, Col, Modal, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";
import QuarantineTree from "./QuarantineTree";
import ReactSelect from "react-select";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
// import { InputWrapper } from "../components/InputWrapper";
const fisikValidation = () => {
  return Yup.object().shape({
    kode: Yup.string().required(""),
    kode_simponi: Yup.string().required(""),
    uraian: Yup.string().required(""),
    tarif: Yup.string().required(""),
  });
};
const PaymentCreateModalFisik = ({
  show,
  handleClose,
  append,
  ptkFisik = [],
  jenisPermohonan,
  jenisKarantina,
}) => {
  const options = ptkFisik?.map((item) => ({
    value: item?.id,
    label: item?.nama_komoditas,
  }));
  const [selectedJasa, setSelectedJasa] = useState();
  const [selected, setSelected] = useState();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    control,
  } = useForm({
    resolver: yupResolver(fisikValidation()),
    defaultValues: {
      kode: "",
      kode_simponi: "",
      uraian: "",
      tarif: "",
    },
  });
  const onSubmit = (values) => {
    append({
      kode: values.kode,
      kode_simponi: values.kode_simponi,
      uraian: values.uraian,
      tarif: values.tarif,
    });
    handleClose();
  };
  console.log(errors);
  return (
    <Modal className="modal-xl" show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Jasa Fisik</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-2">
            <Controller
              control={control}
              name="type"
              defaultValue={null}
              render={({ field: { onChange, ...field } }) => (
                <ReactSelect
                  {...field}
                  value={selectedJasa ?? ""}
                  onChange={(e) => {
                    e?.value && onChange(e);
                    setSelectedJasa(e);
                  }}
                  options={options}
                />
              )}
            />
          </Row>
          <Row className="mb-2">
            <Col>
              <label>Pilih tarif</label>
              <QuarantineTree
                jenisKarantina={jenisKarantina}
                jenisPermohonan={jenisPermohonan}
                reset={reset}
                onSelect={setSelected}
                className="border rounded p-2"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="d-flex flex-column">
              <label>Kode Tarif</label>
              <input className="form-control" {...register("kode")} />
            </Col>
            <Col sm={3} className="d-flex flex-column">
              <label>Tarif</label>
              <input className="form-control" {...register("tarif")} />
            </Col>
            <Col sm={3} className="d-flex flex-column">
              <label>Satuan</label>
              <input className="form-control" value={selected?.satuan} />
            </Col>
            <Col sm={3} className="d-none">
              <input className="form-control" {...register("kode_simponi")} />
            </Col>
            <Col sm={3} className="d-none">
              <input className="form-control" {...register("uraian")} />
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
export default PaymentCreateModalFisik;
