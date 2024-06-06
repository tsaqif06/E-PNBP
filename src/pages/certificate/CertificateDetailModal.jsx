import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { getKarantinaJenisKirim, getKarantinaLabel } from "../../data/constant";

const CertificateDetailModal = ({ show, handleClose, ptk }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Sertifikat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row md={6}>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">No AJU</Form.Label>
            <Form.Control
              disabled
              readOnly
              type="text"
              id="no_aju"
              placeholder="No AJU"
              value={ptk?.no_aju ?? "-"}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">Karantina</Form.Label>
            <Form.Control
              disabled
              type="text"
              id="karantina"
              placeholder="Karantina"
              value={getKarantinaLabel(ptk?.jenis_karantina) ?? "-"}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">No Dokumen</Form.Label>
            <Form.Control
              disabled
              type="text"
              id="no_document"
              placeholder="No Dokumen"
              value={ptk?.no_dok_permohonan ?? "-"}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">Tanggal Terbit</Form.Label>
            <Form.Control
              disabled
              value={ptk?.tgl_aju ?? "-"}
              type="text"
              id="no_document"
              placeholder="Tanggal Terbit"
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">Karantina</Form.Label>
            <Form.Control
              disabled
              type="text"
              id="no_document"
              placeholder="Jenis"
              value={getKarantinaJenisKirim(ptk?.jenis_permohonan) ?? "-"}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">Status</Form.Label>
            <Form.Control
              disabled
              type="text"
              id="no_document"
              placeholder="Status"
              value={ptk?.status_bayar?.toUpperCase() ?? "-"}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">Pemohon</Form.Label>
            <Form.Control
              disabled
              type="text"
              id="no_document"
              placeholder="Pemohon"
              value={ptk?.nama_pemohon ?? "-"}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="no_document">Pengirim</Form.Label>
            <Form.Control
              disabled
              type="text"
              id="no_document"
              placeholder="Pengirim"
              value={ptk?.nama_pengirim ?? "-"}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CertificateDetailModal;
