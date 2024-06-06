import React from "react";
import SEO from "../components/SEO";
import { Card, Col, Nav, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const InstitutionManager = () => {
  return (
    <React.Fragment>
      <SEO title="Institution Manager" />

      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div>
          <ol className="breadcrumb fs-sm mb-1">
            <li className="breadcrumb-item">
              <Link href="#">Master Data</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Table Lembaga
            </li>
          </ol>
          <h4 className="main-title mb-0">Data Lembaga</h4>
        </div>
        <div className="d-flex align-items-center gap-2 mt-3 mt-md-0"></div>
      </div>
      <Row className="g-3">
        <Col xs="12">
          <Card className="card-one">
            <Card.Header>
              <Card.Title as="h6">Data Lembaga</Card.Title>
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
                    <th>Nama</th>
                    <th>Jenis Lembaga</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "00035",
                      document_id: "000357789",
                      document_date: "27 Oktober 2023",
                      name: "Barantin",
                      quarantine: "Tumbuhan",
                      sender: "Suyoto",
                      type: "PUSAT",
                      status: {
                        badge: "success",
                        label: "Released",
                      },
                      applicant: "Subagyo",
                    },
                    {
                      id: "00035",
                      document_id: "000357789",
                      document_date: "27 Oktober 2023",
                      name: "UPT Kab. A",
                      quarantine: "Tumbuhan",
                      sender: "Suyoto",
                      type: "DAERAH",
                      status: {
                        badge: "success",
                        label: "Released",
                      },
                      applicant: "Subagyo",
                    },
                    {
                      id: "00034",
                      document_id: "000357790",
                      document_date: "28 Oktober 2023",
                      name: "UPT Kab. B",
                      quarantine: "Hewan",
                      sender: "Sutarjo",
                      type: "DAERAH",
                      status: {
                        badge: "info",
                        label: "Done",
                      },
                      applicant: "Sutarman",
                    },
                    {
                      id: "00034",
                      document_id: "000357790",
                      document_date: "28 Oktober 2023",
                      name: "UPT Kab. C",
                      quarantine: "Hewan",
                      sender: "Sutarjo",
                      type: "DAERAH PEMBANTU",
                      status: {
                        badge: "info",
                        label: "Done",
                      },
                      applicant: "Sutarman",
                    },
                  ].map((item, index) => (
                    <tr style={{ cursor: "pointer" }} key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <span className="ff-numerals">{item.name ?? "-"}</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <h6 className="mb-0">{item.type ?? "-"}</h6>
                        </div>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.address ?? "-"}
                        </span>
                      </td>
                      <td>
                        {/* <div className="d-flex justify-content-end">
                          <Link to="" className="link-more">
                            <i className="ri-more-2-fill"></i>
                          </Link>
                        </div> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default InstitutionManager;
