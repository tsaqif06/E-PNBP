import React from "react";
import SEO from "../components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Nav, Row, Table } from "react-bootstrap";

const UserManager = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <SEO title="User Manager" />

      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div>
          <ol className="breadcrumb fs-sm mb-1">
            <li className="breadcrumb-item">
              <Link href="#">Master Data</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Table User
            </li>
          </ol>
          <h4 className="main-title mb-0">Data User</h4>
        </div>
      </div>
      <Row className="g-3">
        <Col xs="12">
          <Card className="card-one">
            <Card.Header>
              <Card.Title as="h6">Data User</Card.Title>
              <Nav className="nav-icon nav-icon-sm ms-auto">
                <Button
                  color="primary"
                  // to="/settings/user-manager/create"
                  className="d-flex "
                  onClick={() => navigate("/settings/user-manager/create")}
                >
                  <i className="ri-file-add-line me-1"></i>
                  <span>Tambah user</span>
                </Button>
                <Nav.Link href="">
                  {/* <i className="ri-more-2-fill"></i> */}
                </Nav.Link>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Table className="table-agent mb-0" responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th style={{ width: "10%" }}>Email</th>
                    <th>Alamat</th>
                    <th>Role</th>
                    <th>Lembaga</th>
                    <th>Aksi</th>
                    {/* <th>&nbsp;</th> */}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "00035",
                      document_id: "000357789",
                      document_date: "27 Oktober 2023",
                      name: "Allan R. Palban",
                      quarantine: "Tumbuhan",
                      sender: "Suyoto",
                      type: "IMPOR",
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
                      name: "Charlene S. Plateros",
                      quarantine: "Hewan",
                      sender: "Sutarjo",
                      type: "EKSPOR",
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
                          <h6 className="mb-0">{item.email ?? "-"}</h6>
                        </div>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.address ?? "-"}
                        </span>
                      </td>
                      <td>
                        <span className="ff-numerals">{item.role ?? "-"}</span>
                      </td>
                      <td>
                        <span className="ff-numerals">
                          {item.lembaga ?? "-"}
                        </span>
                      </td>

                      <td>
                        <div className="d-flex justify-content-end">
                          <Link to="" className="link-more">
                            <i className="ri-more-2-fill"></i>
                          </Link>
                        </div>
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
export default UserManager;
