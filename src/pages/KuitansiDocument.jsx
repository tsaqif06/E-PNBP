import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import SEO from "../components/SEO";
import { Link, useNavigate } from "react-router-dom";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: "40px",
    fontSize: "10px",
    fontWeight: "normal",
  },
  title: {
    textAlign: "center",
    paddingTop: "20px",
    fontWeight: "extrabold",
  },
  headerRight: {
    textAlign: "right",
    paddingTop: "60px",
    fontWeight: "normal",
  },
  subTitle: {
    textAlign: "center",
    marginBottom: "20px",
  },
  dots: {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
});
const Table = () => {
  const data = [{ total: 10000000 }, { total: 10000000 }];
  return (
    <View
      style={{
        marginTop: "20px",
        border: "1px solid black",
        // padding: "2px",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "4px",
          borderBottom: "1px solid black",
          paddingVertical: "2px",
        }}
      >
        <Text style={{ width: "30px", paddingLeft: "2px" }}>No</Text>
        <Text style={{ width: "200px" }}>Jasa Tindakan Karantina</Text>
        <Text style={{ width: "100px" }}>Biaya Satuan</Text>
        <Text style={{ width: "100px" }}>Jumlah/Vol</Text>
        <Text style={{ width: "100px", paddingRight: "2px" }}>Total (Rp)</Text>
      </View>
      {data?.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "4px",
              paddingVertical: "2px",
            }}
          >
            <Text style={{ width: "30px", paddingLeft: "2px" }}>
              {index + 1}
            </Text>
            <Text style={{ width: "200px" }}>Jasa Tindakan Karantina</Text>
            <Text style={{ width: "100px" }}>Biaya Satuan</Text>
            <Text style={{ width: "100px" }}>Jumlah/Vol</Text>
            <Text style={{ width: "100px", paddingRight: "2px" }}>
              {item?.total ?? "-"}
            </Text>
          </View>
        );
      })}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "4px",
          borderTop: "1px solid black",
          paddingVertical: "2px",
        }}
      >
        <Text style={{ width: "30px", paddingLeft: "2px" }}></Text>
        <Text style={{ width: "200px" }}></Text>
        <Text style={{ width: "100px" }}>Jumlah Keseluruhan:</Text>
        <Text style={{ width: "100px" }}></Text>
        <Text style={{ width: "100px", paddingRight: "2px" }}>
          Rp. 20.000.000
        </Text>
      </View>
    </View>
  );
};

const MyDocument = () => {
  return (
    <Document title="Pembayaran Sertifikat XYZ">
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRight}>
          <Text>333333</Text>
        </View>
        <View style={styles.title}>
          <Text>KUITANSI</Text>
        </View>
        <View style={styles.subTitle}>
          <Text>
            Nomor :<Text style={styles.dots}>2024.2.0401.0.KWI.I.000738/1</Text>
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: "100px" }}>Telah terima dari</Text>
          <Text style={{ fontWeight: "bold" }}>: PT SEKAR MULIA ABADI</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: "100px" }}>beralamat di</Text>
          <Text style={{ fontWeight: "bold" }}>
            : JL. PULAU SOLOR KAVLING 600131, Komplek KIM II
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ width: "100px" }}>Uang sejumlah</Text>
          <Text style={{ fontWeight: "bold" }}>
            : Dua Juta Sembilan Ratus Delapan Puluh Delapan Ribu Delapan Puluh
            Rupiah
          </Text>
        </View>
        <View style={{ paddingTop: "50px" }}>
          <Text>
            Untuk pembayaran imbalan jasa Karantina Tumbuhan dan/atau penggunaan
            sarana atas pemasukan Non Benih sejumlah 172620 KILOGRAM b)
            Berbentuk buah (buah segar);25088 KILOGRAM jeruk; sebagaimana
            tertera pada formulir Nomor: 2024.2.0401.0.K02.I.000738 Tanggal
            08/01/2024, dengan perincian sebagai berikut:
          </Text>
        </View>
        <View>
          <Table />
        </View>
        <View></View>
      </Page>
    </Document>
  );
};
const KuitansiDocument = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO title="Kuitansi" />
      <div className="d-md-flex align-items-center justify-content-between mb-1 mt-1">
        <div>
          <ol className="breadcrumb fs-sm mb-0">
            <li className="breadcrumb-item">
              <Link href="#">Dashboard</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Pembayaran
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Kuitansi
            </li>
          </ol>
          <h4 className="main-title mb-0">Kuitansi Pembayaran</h4>
        </div>
        <div className="d-flex align-items-center gap-2 mt-1 mt-md-0"></div>
      </div>
      <Card className="card-one">
        <CardBody>
          <Row>
            <PDFViewer width={850} height={1200}>
              <MyDocument />
            </PDFViewer>
          </Row>

          <Row className="d-flex justify-content-end m-4">
            <Col className="d-flex">
              <Button
                className="btn btn-primary"
                onClick={() => navigate("/dashboard/payment")}
              >
                Kembali
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
export default KuitansiDocument;
