import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Modal } from "react-bootstrap";
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
  return (
    <View
      style={{
        marginTop: "20px",
        border: "1px solid black",
        padding: "2px",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "4px",
        }}
      >
        <Text style={{ width: "30px" }}>No</Text>
        <Text style={{ width: "200px" }}>Jasa Tindakan Karantina</Text>
        <Text style={{ width: "100px" }}>Biaya Satuan</Text>
        <Text style={{ width: "100px" }}>Jumlah/Vol</Text>
        <Text style={{ width: "100px" }}>Total (Rp)</Text>
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
        <View>
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
      </Page>
    </Document>
  );
};
const PaymentDocumentModal = ({ show, handleClose }) => {
  return (
    <Modal className="modal-xl" show={show} onHide={handleClose}>
      <PDFViewer width={500} height={900}>
        <MyDocument />
      </PDFViewer>
    </Modal>
  );
};
export default PaymentDocumentModal;
