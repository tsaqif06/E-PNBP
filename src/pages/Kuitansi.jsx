import React, { useState } from "react";
import { Card, Col, Row, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import LaporPNBPModal from "./LaporPNBPModal";
import useDisclosure from "../hooks/useDisclosure";
import ReactDatePicker from "react-datepicker";
import { useGetReqBillList } from "../hooks/useReqBill";
import DataTable from "react-data-table-component";
const Kuitansi = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [startDate, setStartDate] = useState("");
  const countPerPage = 10;

  const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  const params = {
    page: page,
  };
  const { data: response } = useGetReqBillList({ params });
  const { data: listData, total = 0 } = response ?? {};
  console.log(listData);
  const columns = [
    {
      name: "Aksi",
      cell: () => (
        <div className="d-flex justify-content-around">
          <i
            style={{ cursor: "pointer" }}
            className="ri-edit-line "
            // onClick={() => {
            //   navigate(`/kuitansi/${row.id}/edit`);
            // }}
          />
          <i style={{ cursor: "pointer" }} className="ri-delete-bin-line" />
        </div>
      ),
    },
    {
      name: "Nomor Transaksi",
      cell: (row) => row?.idtrx_bill,
    },
    {
      name: "Kode Bill",
      cell: (row) => row?.kode_bill,
    },
    {
      name: "Jenis Trx",
      cell: (row) => {
        switch (row?.idtrx_bill?.charAt(0)) {
          case "H":
            return "HEWAN";
          case "T":
            return "TUMBUHAN";
          case "I":
            return "IKAN";
          default:
            return "_";
        }
      },
    },
    {
      name: "Tanggal Billing",
      cell: (row) => row?.date_bill,
    },
    {
      name: "Tanggal Expired",
      cell: (row) => row?.exp_bill,
    },
    {
      name: "Total",
      cell: (row) => row?.total,
    },
    {
      name: "Status Pembayaran",
      cell: (row) => (
        <span className="ff-numerals">{row?.nama_wajib_bayar ?? "-"}</span>
      ),
    },
    {
      name: "NTPN",
      cell: (row) => row?.ntpn,
    },
    {
      name: "Tanggal Setor",
      cell: (row) => row?.date_setor,
    },
    {
      name: "Channel",
      cell: (row) => row?.chnl_bayar,
    },
  ];

  return (
    <React.Fragment>
      <SEO title="Kuitansi" />
      <div className="d-md-flex align-items-center justify-content-between mb-4 pt-5">
        <div>
          <ol className="breadcrumb fs-sm mb-1">
            <li className="breadcrumb-item">
              <Link href="#">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Table Status Billing
            </li>
          </ol>
          <h4 className="main-title mb-0">Data Status Billing</h4>
        </div>
        <div className="d-flex align-items-center gap-2 mt-3 mt-md-0"></div>
      </div>

      <Row className="g-3">
        <Col xs="12">
          <Card className="card-one">
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h6">Data Status Billing</Card.Title>
              <div className="d-flex" style={{ columnGap: "2px" }}>
                <ReactDatePicker
                  className="form-control"
                  selected={startDate}
                  closeOnScroll={true}
                  isClearable
                  placeholderText="Tanggal start"
                  onChange={(e) => setStartDate(e)}
                />
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <Button
                      className="text-align-center"
                      onClick={() => {
                        onOpen();
                      }}
                    >
                      <i
                        style={{ cursor: "pointer" }}
                        className="ri-file-add-line "
                      ></i>
                      Cek Status Bayar
                    </Button>
                  </Nav.Link>
                </Nav>
              </div>
            </Card.Header>
            <Card.Body>
              <DataTable
                noDataComponent={() => {
                  return (
                    <>
                      <h2>Tidak ada data</h2>
                    </>
                  );
                }}
                selectableRows
                columns={columns}
                data={listData}
                highlightOnHover
                pagination
                paginationServer
                paginationTotalRows={total}
                paginationPerPage={countPerPage}
                paginationComponentOptions={{
                  noRowsPerPage: true,
                  rangeSeparatorText: "dari",
                }}
                onChangePage={(page) => {
                  setPage(page);
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <LaporPNBPModal isOpen={isOpen} onClose={onClose} />
    </React.Fragment>
  );
};
export default Kuitansi;
