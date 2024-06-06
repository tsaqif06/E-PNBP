export const formOptionsKH = [
  { label: "K-1.1 | PERMOHONAN TINDAKAN KARANTINA", value: 1, kode: "K-1.1" },
  { label: "KH-1 | SERTIFIKAT KESEHATAN HEWAN", value: 44, kode: "KH-1" },
  { label: "KH-2 | SERTIFIKAT SANITASI PRODUK HEWAN", value: 45, kode: "KH-2" },
  { label: "K-9.1 | SURAT KETERANGAN MEDIA PEMBAWA LAIN", value: 37, kode: "K-9.1" },
  { label: "K-9.2 | SERTIFIKAT PELEPASAN KARANTINA", value: 38, kode: "K-9.2" },
  { label: "K-9.3 | SURAT KETERANGAN KARANTINA", value: 42, kode: "K-9.3" },
];
export const formOptionsKI = [
  { label: "K-1.1 | PERMOHONAN TINDAKAN KARANTINA", value: 1, kode: "K-1.1" },
  { label: "KI-1 | SERTIFIKAT KESEHATAN IKAN DAN PRODUK IKAN EKSPOR", value: 46, kode: "KI-1" },
  { label: "KI-2 | SERTIFIKAT KESEHATAN IKAN DAN PRODUK IKAN ANTAR AREA", value: 47, kode: "KI-2" },
  { label: "K-9.1 | SURAT KETERANGAN MEDIA PEMBAWA LAIN", value: 37, kode: "K-9.1" },
  { label: "K-9.2 | SERTIFIKAT PELEPASAN KARANTINA", value: 38, kode: "K-9.2" },
  { label: "K-9.3 | SURAT KETERANGAN KARANTINA", value: 42, kode: "K-9.3" },
];
export const formOptionsKT = [
  { label: "K-1.1 | PERMOHONAN TINDAKAN KARANTINA", value: 1, kode: "K-1.1" },
  { label: "KT-1 | SERTIFIKAT KESEHATAN TUMBUHAN UNTUK EKSPOR", value: 48, kode: "KT-1" },
  { label: "KT-2 | SERTIFIKAT KESEHATAN TUMBUHAN UNTUK RE-EKSPOR", value: 49, kode: "KT-2" },
  { label: "KT-3 | SERTIFIKAT KESEHATAN TUMBUHAN ANTAR AREA", value: 50, kode: "KT-3" },
  { label: "KT-4 | SERTIFIKAT EKSPOR UNTUK PRODUK TUMBUHAN", value: 51, kode: "KT-4" },
  { label: "K-9.1 | SURAT KETERANGAN MEDIA PEMBAWA LAIN", value: 37, kode: "K-9.1" },
  { label: "K-9.2 | SERTIFIKAT PELEPASAN KARANTINA", value: 38, kode: "K-9.2" },
  { label: "K-9.3 | SURAT KETERANGAN KARANTINA", value: 42, kode: "K-9.3" },
];

export const getKarantinaLabel = (karantina) => {
  switch (karantina) {
    case "H":
      return "HEWAN";
    case "T":
      return "TUMBUHAN";
    case "I":
      return "IKAN";
  }
};
export const getKarantinaJenisKirim = (type) => {
  switch (type) {
    case "IM":
      return "IMPOR";
    case "EX":
      return "EKSPOR";
  }
};
export const getReactSelectValue = (array, value) => {
  if (array.length < 1) return { label: "", value: "" };
  if (typeof array[0] === "string") {
    const selected = array.find((v) => v === value);
    return { label: selected ?? "", value: selected ?? "" };
  }
  if (typeof array[0] === "object") {
    const selected = array.find((v) =>
      typeof v === "string" ? v === value : v?.value === value
    );
    return { label: selected?.label ?? "", value: selected?.value ?? "" };
  }
};
