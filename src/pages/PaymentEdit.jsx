import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Nav,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useDisclosure from "../hooks/useDisclosure";
import PaymentCreateModalFisik from "./PaymentCreateModalFisik";
import { Input, Label } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import dayjs from "dayjs";
import PaymentCreateModalLain from "./PaymentCreateModalLain";
import PaymentCreateModalPerjadin from "./PaymentCreateModalPerjadin";
import SEO from "../components/SEO";
const validation = () => {
  return Yup.object().shape({
    date: Yup.string().required("Field tidak boleh kosong"),
    jasa_fisik: Yup.array(
      Yup.object({
        kode: Yup.string().required("Pilih salah satu"),
        kode_simponi: Yup.string().required("Pilih salah satu"),
        uraian: Yup.string().required("Pilih salah satu"),
        tarif: Yup.string().required("Pilih salah satu"),
      })
    ),
    jasa_lain: Yup.array(
      Yup.object({
        kode: Yup.string().required("Pilih salah satu"),
        kode_simponi: Yup.string().required("Pilih salah satu"),
        uraian: Yup.string().required("Pilih salah satu"),
        tarif: Yup.string().required("Pilih salah satu"),
      })
    ),
    perjadin_detil: Yup.array(
      Yup.object({
        no_pemohon: Yup.string().required("Field tidak boleh kosong"),
        no_spdd: Yup.string().required("Field tidak boleh kosong"),
        keterangan: Yup.string(),
        nominal: Yup.string().required("Field tidak boleh kosong"),
      })
    ),
  });
};
const PaymentEdit = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const {
    onClose: onClose2,
    onOpen: onOpen2,
    isOpen: isOpen2,
  } = useDisclosure();
  const {
    onClose: onClose3,
    onOpen: onOpen3,
    isOpen: isOpen3,
  } = useDisclosure();
  const { id } = useParams();

  const { control, register } = useForm({
    resolver: yupResolver(validation()),
    defaultValues: {
      date: "",
      jasa_fisik: [],
      jasa_lain: [],
      perjadin_detil: [],
    },
  });
  const {
    fields: fisikFields,
    append: fisikAppend,
    remove: fisikRemove,
  } = useFieldArray({ name: "jasa_fisik", control: control });
  const {
    fields: lainFields,
    append: lainAppend,
    remove: lainRemove,
  } = useFieldArray({ name: "jasa_lain", control: control });
  const {
    fields: perjadinFields,
    append: perjadinAppend,
    remove: perjadinRemove,
  } = useFieldArray({ name: "perjadin_detil", control: control });

  const renderTableContentFisik = () => {
    return fisikFields.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_fisik.${index}.kode`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_fisik.${index}.kode_simponi`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_fisik.${index}.uraian`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_fisik.${index}.tarif`)}
          />
        </td>
        <td>
          <span
            className="btn btn-danger btn-sm"
            onClick={() => fisikRemove(index)}
          >
            <i className="ri-delete-bin-line"></i>
          </span>
        </td>
      </tr>
    ));
  };
  const renderTableContentLain = () => {
    return lainFields.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_lain.${index}.kode`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_lain.${index}.kode_simponi`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_lain.${index}.uraian`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`jasa_lain.${index}.tarif`)}
          />
        </td>
        <td>
          <span
            className="btn btn-danger btn-sm"
            onClick={() => lainRemove(index)}
          >
            <i className="ri-delete-bin-line"></i>
          </span>
        </td>
      </tr>
    ));
  };
  const renderTableContentPerjadin = () => {
    return perjadinFields.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <input
            disabled
            type="text"
            {...register(`perjadin_detil.${index}.no_pemohon`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`perjadin_detil.${index}.no_spdd`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`perjadin_detil.${index}.keterangan`)}
          />
        </td>
        <td>
          <input
            disabled
            type="text"
            {...register(`perjadin_detil.${index}.nominal`)}
          />
        </td>
        <td>
          <span
            className="btn btn-danger btn-sm"
            onClick={() => perjadinRemove(index)}
          >
            <i className="ri-delete-bin-line"></i>
          </span>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <SEO title="Buat Pembayaran" />
      <div className="d-md-flex align-items-center justify-content-between mb-1 mt-1">
        <div>
          <ol className="breadcrumb fs-sm mb-0">
            <li className="breadcrumb-item">
              <Link href="#">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Pembayaran
            </li>
          </ol>
          {/* <h4 className="main-title mb-0">Buat Pembayaran</h4> */}
        </div>
        <div className="d-flex align-items-center gap-2 mt-1 mt-md-0"></div>
      </div>
      <form>
        <Card className="card-one">
          <Row>
            <Col xs={6}>
              <CardHeader>
                <Card.Title as="h4">Data Pembayaran</Card.Title>
              </CardHeader>
              <CardBody className="p-4">
                <Row md={6}>
                  <Col md={6}>
                    <Form.Label htmlFor="no_document">No Dokumen</Form.Label>
                    <Form.Control
                      type="text"
                      id="no_document"
                      placeholder="No Dokumen"
                    />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Label htmlFor="serial_number">No Seri</Form.Label>
                    <Form.Control
                      type="text"
                      id="serial_number"
                      placeholder="No Seri"
                    />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Label htmlFor="payment_date">
                      Tanggal Kuitansi
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="payment_date"
                      placeholder="Tanggal Kuitansi"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <Form.Label htmlFor="payment_type">
                      Jenis Pembayaran
                    </Form.Label>
                    <FormGroup className="d-flex">
                      <FormGroup check inline className="me-2">
                        <Input type="checkbox" name="a" id="a" />
                        <Label check>Pembayaran Awal</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input type="checkbox" name="a" id="a" />
                        <Label check>Pembayaran Akhir</Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Label htmlFor="payment_date">
                      Pengirim/Terima dari
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="sender"
                      name="sender"
                      placeholder="Pengirim"
                      className="mb-2"
                    />
                    <Form.Control
                      type="text"
                      id="sender_address"
                      name="sender_address"
                      placeholder="Alamat Pengirim"
                    />
                  </Col>
                  <Col md={6} className="mb-2">
                    <Form.Label htmlFor="no_document">Nominal</Form.Label>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      id="nominal"
                      placeholder="Nominal"
                    />
                    <Form.Control
                      type="text"
                      id="nominal"
                      placeholder="Nominal"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <Form.Label htmlFor="no_document">
                      untuk biaya karantina atas:{" "}
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      id="nominal"
                      value="pemasukan non benih"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <Form.Label htmlFor="no_document">Sejumlah</Form.Label>
                    <Form.Control
                      className="mb-2"
                      type="text"
                      id="nominal"
                      value="17260 (2) Plantet, Ex-plant"
                    />
                  </Col>
                  <Col md={4} className="mb-2">
                    <Form.Label htmlFor="no_document">
                      Sesuai Formulir
                    </Form.Label>
                    <Form.Control className="mb-2" type="text" id="nominal" />
                  </Col>
                  <Col md={4} className="mb-2">
                    <Form.Label htmlFor="no_document">No</Form.Label>
                    <Form.Control className="mb-2" type="text" id="nominal" />
                  </Col>
                  <Col md={4} className="mb-2">
                    <Form.Label htmlFor="no_document">Tanggal</Form.Label>
                    <Controller
                      name="date"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <ReactDatePicker
                          peekNextMonth={true}
                          showMonthDropdown={true}
                          showYearDropdown={true}
                          dropdownMode="select"
                          className="form-control"
                          wrapperClassName="w-100"
                          calendarClassName="shadow-lg"
                          dateFormat={"dd-MMMM-yyyy"}
                          showPopperArrow={false}
                          onChange={(e) => {
                            onChange(dayjs(e).format("YYYY-MM-DD"));
                            //   setIssueDate(e);
                          }}
                        />
                      )}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Col>
            <Col xs={6}>
              <CardHeader>
                <Card.Title as="h4">Jasa Pemeriksaan Fisik</Card.Title>
                <Nav className="nav-icon nav-icon-md ms-auto">
                  <Nav.Link
                    onClick={() => onOpen()}
                    className="btn btn-primary p-2 "
                  >
                    <i
                      className="ri-add-circle-line"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span className="ms-1 me-2">Jasa Fisik</span>
                  </Nav.Link>
                </Nav>
              </CardHeader>

              <Card className="mx-2 mt-2">
                <Table
                  style={{ minHeight: 100 }}
                  className="table-agent mb-0"
                  responsive
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th style={{ minWidth: 50 }}>Kode</th>
                      <th>Kode Simponi</th>
                      <th>Uraian</th>
                      <th>Tarif</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderTableContentFisik()}</tbody>
                </Table>
              </Card>
              <CardHeader>
                <Card.Title as="h4">Jasa Karantina Lainnya</Card.Title>
                <Nav className="nav-icon nav-icon-md ms-auto">
                  <Nav.Link
                    onClick={() => onOpen2()}
                    className="btn btn-primary p-2 "
                  >
                    <i
                      className="ri-add-circle-line"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span className="ms-1 me-2">Jasa Lain</span>
                  </Nav.Link>
                </Nav>
              </CardHeader>
              <Card className="mx-2 mt-2">
                <Table
                  style={{ minHeight: 100 }}
                  className="table-agent mb-0"
                  responsive
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Kode</th>
                      <th>Kode Simponi</th>
                      <th>Uraian</th>
                      <th>Tarif</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderTableContentLain()}</tbody>
                </Table>
              </Card>
              <CardHeader>
                <Card.Title as="h4">Biaya Perjalanan Dinas</Card.Title>
                <Nav className="nav-icon nav-icon-md ms-auto">
                  <Nav.Link
                    onClick={() => onOpen3()}
                    className="btn btn-primary p-2 "
                  >
                    <i
                      className="ri-add-circle-line"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span className="ms-1 me-2">Perjalanan Dinas</span>
                  </Nav.Link>
                </Nav>
              </CardHeader>
              <Card className="mx-2 mt-2">
                <Table
                  className="table-agent mb-0"
                  style={{ minHeight: 100 }}
                  responsive
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th style={{ width: "50px" }}>No Pemohon</th>
                      <th>No SPDD</th>
                      <th>Keterangan</th>
                      <th>Nominal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderTableContentPerjadin()}</tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Card>
      </form>
      <PaymentCreateModalFisik
        show={isOpen}
        handleClose={onClose}
        append={fisikAppend}
      />
      <PaymentCreateModalLain
        show={isOpen2}
        handleClose={onClose2}
        append={lainAppend}
      />
      <PaymentCreateModalPerjadin
        show={isOpen3}
        handleClose={onClose3}
        append={perjadinAppend}
      />
    </>
  );
};
export default PaymentEdit;
