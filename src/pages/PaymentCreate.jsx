import {
  Button,
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
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { useGetSertifikatPelepasDetail } from "../hooks/usePelepasan";
import ReactSelect from "react-select";

import { useEffect, useState } from "react";
import { formOptionsKH } from "../data/constant";
import { useAddKuitansi } from "../hooks/useKuitansi";
const validation = () => {
  return Yup.object().shape({
    ptk_id: Yup.string().required("Field harus diisi"),
    upt_id: Yup.string().required("Field harus diisi"),
    nomor: Yup.string().required("Field harus diisi"),
    tanggal: Yup.string().required("Field harus diisi"),
    nomor_seri: Yup.string().required("Field harus diisi"),
    nama_wajib_bayar: Yup.string().required("Field harus diisi"),
    jenis_identitas: Yup.string().required("Field harus diisi"),
    identitas_id: Yup.string().required("Field harus diisi"),
    mp: Yup.string().required("Field harus diisi"),
    jumlah_mp: Yup.string().required("Field harus diisi"),
    sesuai_dok: Yup.string().required("Field harus diisi"),
    nomor_dokumen: Yup.string().required("Field harus diisi"),
    tgl_dokumen: Yup.string().required("Field harus diisi"),
    status_bayar: Yup.string().required("Field harus diisi"),
    is_perjadin: Yup.boolean().required("Field harus diisi"),
    total_perjadin: Yup.number(),
    jasa_fisik: Yup.array(
      Yup.object({
        ptk_komoditas_id: Yup.string().required("Field harus diisi"),
        tarif_id: Yup.string().required("Field harus diisi"),
        uraian: Yup.string().required("Field harus diisi"),
        volume: Yup.number().required("Field harus diisi"),
        frekuensi: Yup.number().required("Field harus diisi"),
        satuan_volume_id: Yup.number().required("Field harus diisi"),
        total_tarif: Yup.number().required("Field harus diisi"),
        kode_simponi: Yup.string().required("Field harus diisi"),
        is_jasa_fisik: Yup.boolean().required("Field harus diisi"),
      })
    ),
    jasa_lain: Yup.array(
      Yup.object({
        ptk_komoditas_id: Yup.string().required("Field harus diisi"),
        tarif_id: Yup.string().required("Field harus diisi"),
        uraian: Yup.string().required("Field harus diisi"),
        volume: Yup.number().required("Field harus diisi"),
        frekuensi: Yup.number().required("Field harus diisi"),
        satuan_volume_id: Yup.number().required("Field harus diisi"),
        total_tarif: Yup.number().required("Field harus diisi"),
        kode_simponi: Yup.string().required("Field harus diisi"),
        is_jasa_fisik: Yup.boolean().required("Field harus diisi"),
      })
    ),
    perjadin_detil: Yup.array(
      Yup.object({
        tarif_id: Yup.string().required("Field harus diisi"),
        kode_simponi: Yup.string().required("Field harus diisi"),
        no_sppd: Yup.string().required("Field harus diisi"),
        keterangan: Yup.string().required("Field harus diisi"),
      })
    ),
  });
};
const PaymentAdd = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedPaymentDate, setSelectedPaymentDate] = useState();
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

  const navigate = useNavigate();
  const { id } = useParams();
  const { data: response, isSuccess } = useGetSertifikatPelepasDetail(id);
  const { data: { ptk = {}, ptk_komoditi = [] } = {} } = response ?? {};
  const { mutateAsync, isPending } = useAddKuitansi();
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation()),
    defaultValues: {
      ptk_id: "",
      upt_id: "",
      nomor: "",
      tanggal: "",
      nomor_seri: "",
      nama_wajib_bayar: "",
      jenis_identitas: "",
      identitas_id: "",
      mp: "",
      jumlah_mp: "",
      sesuai_dok: "",
      nomor_dokumen: "",
      tgl_dokumen: "",
      status_bayar: "",
      is_perjadin: false,
      total_perjadin: 0,
      jasa_fisik: [
        {
          ptk_komoditas_id: "",
          tarif_id: "",
          uraian: "",
          volume: 0,
          frekuensi: 0,
          satuan_volume_id: 0,
          total_tarif: 0,
          kode_simponi: "",
          is_jasa_fisik: true,
        },
      ],
      jasa_lain: [
        {
          ptk_komoditas_id: "",
          tarif_id: "",
          uraian: "",
          volume: 0,
          frekuensi: 0,
          satuan_volume_id: 0,
          total_tarif: 0,
          kode_simponi: "",
          is_jasa_fisik: false,
        },
      ],
      perjadin_detil: [
        {
          tarif_id: "",
          kode_simponi: "",
          no_sppd: "",
          keterangan: "",
        },
      ],
    },
  });
  console.log(errors);
  useEffect(() => {
    if (isSuccess) {
      reset({
        ptk_id: ptk?.id ?? "",
        upt_id: ptk?.upt_id ?? "",
        nomor: ptk?.no_dok_permohonan ?? "",
        tanggal: "",
        nomor_seri: "",
        nama_wajib_bayar: "",
        jenis_identitas: ptk?.jenis_identitas_pemohon ?? "",
        identitas_id: "",
        mp: "",
        jumlah_mp: "",
        nomor_dokumen: "",
        tgl_dokumen: ptk?.tgl_dok_permohonan ?? "",
        status_bayar: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

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
  const onSubmit = async (values) => {
    const response = await mutateAsync(values);
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
        </div>
        <div className="d-flex align-items-center gap-2 mt-1 mt-md-0"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="card-one">
          <Row>
            <Col xs={6}>
              <CardHeader>
                <Card.Title as="h4">Data Pembayaran</Card.Title>
              </CardHeader>
              <CardBody className="">
                <Row md={6}>
                  <Col md={6}>
                    <Form.Label htmlFor="no_document">No Dokumen</Form.Label>
                    <Form.Control
                      type="text"
                      id="no_document"
                      placeholder="No Dokumen"
                      value={ptk?.no_dok_permohonan}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="no_document">No Kuitansi</Form.Label>
                    <Form.Control
                      type="text"
                      id="no_kuitansi"
                      placeholder="No Kuitansi"
                      value={ptk?.no_dok_permohonan + "/"}
                    />
                  </Col>
                  <Col md={6} className="mb-1">
                    <Form.Label htmlFor="serial_number">No Seri</Form.Label>
                    <Form.Control
                      type="text"
                      id="serial_number"
                      placeholder="No Seri"
                    />
                  </Col>
                  <Col md={6} className="mb-1">
                    <Form.Label htmlFor="payment_date">
                      Tanggal Kuitansi
                    </Form.Label>
                    <div className="form-label">
                      <ReactDatePicker
                        className="form-control"
                        selected={selectedPaymentDate}
                        closeOnScroll={true}
                        dateFormat={"dd-MMMM-yyyy"}
                        placeholderText="Tanggal Kuitansi"
                        onChange={(e) => setSelectedPaymentDate(e)}
                      />
                    </div>
                  </Col>
                  <Col md={12} className="mb-1">
                    <Form.Label htmlFor="payment_type">
                      Jenis Pembayaran
                    </Form.Label>
                    <FormGroup className="d-flex">
                      <FormGroup check inline className="me-2">
                        <Input type="radio" name="a" id="a" />
                        <Label check>Pembayaran Awal</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input type="radio" name="a" id="a" />
                        <Label check>Pembayaran Akhir</Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col md={12} className="mb-1">
                    <Form.Label htmlFor="payment_date">
                      Pengirim/Terima dari
                    </Form.Label>
                    <Row>
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          id="sender"
                          name="sender"
                          placeholder="Pengirim"
                          className="mb-1"
                          value={ptk?.nama_pengirim ?? "-"}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Control
                          type="text"
                          id="sender_address"
                          name="sender_address"
                          placeholder="Alamat Pengirim"
                          value={ptk?.alamat_pengirim ?? "-"}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="mb-1">
                    <Form.Label htmlFor="no_document">Nominal</Form.Label>
                    <Form.Control
                      className="mb-1"
                      type="text"
                      id="nominal"
                      placeholder="Nominal"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      type="text"
                      id="nominal"
                      placeholder="Nominal"
                    />
                  </Col>
                  <Col md={12} className="mb-1">
                    <Form.Label htmlFor="no_document">
                      untuk biaya karantina atas:{" "}
                    </Form.Label>
                    <Form.Control type="text" id="nominal" value={""} />
                  </Col>
                  <Col md={12} className="mb-1">
                    <Form.Label htmlFor="no_document">Sejumlah</Form.Label>
                    <Form.Control
                      type="text"
                      id="nominal"
                      value="17260 (2) Plantet, Ex-plant"
                    />
                  </Col>
                  <Col md={4} className="mb-1">
                    <Form.Label htmlFor="no_document">
                      Sesuai Formulir
                    </Form.Label>
                    <ReactSelect options={formOptionsKH} />
                  </Col>
                  <Col md={4} className="mb-1">
                    <Form.Label htmlFor="no_document">No</Form.Label>
                    <Form.Control className="mb-1" type="text" id="nominal" />
                  </Col>
                  <Col md={4} className="mb-1">
                    <Form.Label htmlFor="no_document">Tanggal</Form.Label>
                    <Controller
                      name="date"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <ReactDatePicker
                          selected={selectedDate}
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
                            setSelectedDate(e);
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
                    className="btn btn-primary  "
                  >
                    <i
                      className="ri-add-circle-line"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span className="ms-1 me-2">Jasa Fisik</span>
                  </Nav.Link>
                </Nav>
              </CardHeader>
              <Card className="mx-2 mt-2 ">
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
                <CardBody>
                  <div className="d-flex">
                    <Form.Label htmlFor="no_document">
                      Total Perjadin
                    </Form.Label>
                    <Form.Control
                      className="mb-1"
                      type="text"
                      id="nominal"
                      placeholder="Nominal"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-end mx-2 mb-4">
            <Col
              className="d-flex justify-content-end"
              style={{ columnGap: "4px" }}
            >
              <Button className="btn btn-primary" onClick={() => navigate(-1)}>
                Kembali
              </Button>
              <Button
                className="btn btn-primary"
                type="submit"
                disabled={isPending}
              >
                Simpan
              </Button>
            </Col>
          </Row>
        </Card>
      </form>
      <PaymentCreateModalFisik
        show={isOpen}
        handleClose={onClose}
        append={fisikAppend}
        ptkFisik={ptk_komoditi}
        jenisPermohonan={ptk?.jenis_permohonan}
        jenisKarantina={ptk?.jenis_karantina}
      />
      <PaymentCreateModalLain
        show={isOpen2}
        handleClose={onClose2}
        append={lainAppend}
        jenisPermohonan={ptk?.jenis_permohonan}
      />
      <PaymentCreateModalPerjadin
        show={isOpen3}
        handleClose={onClose3}
        append={perjadinAppend}
      />
    </>
  );
};
export default PaymentAdd;
