import React, { useState } from "react";
import { Card, Col, Row, Nav, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { useGetKuitansiList } from "../hooks/useKuitansi";
const Payment = () => {
  const [page] = useState(1);
  const navigate = useNavigate();
  const params = {
    page: page,
  };
  const { data: response } = useGetKuitansiList({ params });
  const { data: listData } = response ?? {};
  return (
    <React.Fragment>
      <SEO title="Pembayaran" />
      <div className="d-md-flex align-items-center justify-content-between mb-4 pt-5">
        <div>
          <ol className="breadcrumb fs-sm mb-1">
            <li className="breadcrumb-item">
              <Link href="#">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Table Pembayaran Karantina
            </li>
          </ol>
          <h4 className="main-title mb-0">Data Pembayaran</h4>
        </div>
        <div className="d-flex align-items-center gap-2 mt-3 mt-md-0"></div>
      </div>

      <Row className="g-3">
        <Col xs="12">
          <Card className="card-one">
            <Card.Header>
              <Card.Title as="h6">Data Pembayaran / Kwitansi</Card.Title>
              <Nav className="nav-icon nav-icon-sm ms-auto">
                <Nav.Link href="">
                  <i className="ri-refresh-line"></i>
                </Nav.Link>
                <Nav.Link href="">
                  <i className="ri-more-2-fill"></i>
                </Nav.Link>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Table className="table-agent mb-0" responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Aksi</th>

                    <th>Nomor Pembayaran</th>
                    <th>Fase Pembayaran</th>
                    <th>No Seri</th>
                    <th>Tanggal Kuitansi</th>
                    <th>Total</th>
                    <th>Status Pembayaran</th>
                    <th>Kode Bill</th>
                    <th>NTPN</th>
                    <th>Tanggal Setor</th>
                  </tr>
                </thead>
                <tbody>
                  {listData?.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        navigate(`/dashboard/payment/${item.id}/detail`);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <td>{index + 1}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <i
                            style={{ cursor: "pointer" }}
                            className="ri-edit-line"
                            onClick={() => {
                              navigate(`/dashboard/payment/${item.id}/edit`);
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <span className="ff-numerals">
                          {item.payment_id ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.payment_phase ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.serial_number ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.receipt_date ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.total_nominal ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.payment_status ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.billing_code ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">{item.ntpn ?? "-"}</span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.deposit_date ?? "-"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Footer /> */}
      {/* </div> */}
    </React.Fragment>
  );
};
export default Payment;
