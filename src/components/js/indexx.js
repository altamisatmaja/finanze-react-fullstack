import axios from 'axios';

let datakeuangan = [];

const ReadDatabaseBulanIni = async () => {
  try {
    const response = await axios.get("http://localhost:8087/datakeuangan");
    datakeuangan = response.data;

    console.log(datakeuangan);

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    console.log(month);

    const datakeuanganbulanini = datakeuangan.filter(data => {
      const dataMonth = new Date(data.tanggal).getUTCMonth() + 1;
      return dataMonth === month;
    });

    console.log(datakeuanganbulanini);

    const pemasukanBulanIni = datakeuanganbulanini.filter(data => data.jenis === 'Pemasukan');
    const pengeluaranBulanIni = datakeuanganbulanini.filter(data => data.jenis === 'Pengeluaran');

    console.log("Ini data pemasukan", pemasukanBulanIni.length > 0 ? pemasukanBulanIni : "Tidak ada data pemasukan");
    console.log("Ini data pengeluaran", pengeluaranBulanIni.length > 0 ? pengeluaranBulanIni : "Tidak ada data pengeluaran");

  } catch (error) {
    console.error("Error reading database:", error);
  }
};

ReadDatabaseBulanIni();