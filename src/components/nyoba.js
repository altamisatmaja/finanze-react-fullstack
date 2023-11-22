import axios from 'axios';

let dataKeuangan = [];

const ReadDatabase = async () => {
  try {
    const response = await axios.get("http://localhost:8087/datakeuangan");
    dataKeuangan = response.data;
    // console.log(dataKeuangan);

    // mendapatkan semua data dari nilai 
    const totalnilai = dataKeuangan.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);
    console.log(`Total pemasukan dan pengeluaran: ${totalnilai}`)


    // parse ke int
    const jenisdantotal = dataKeuangan.reduce((total, data) => {
      const jenis = data.jenis;
      const nilai = parseInt(data.nilai);
    
      if (total[jenis] !== undefined) {
        total[jenis] += nilai;
      } else {
        total[jenis] = nilai;
      }
    
      return total;
    }, {});

    // console.log("Jenis total:", jenisdantotal);

    // mendapatkan data nilai dari masing2 jenis
    const pemasukanData = dataKeuangan.filter(data => data.jenis === "Pemasukan");
    const pengeluaranData = dataKeuangan.filter(data => data.jenis === "Pengeluaran");

    // normalisasi
    const totalPemasukan = pemasukanData.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);
    const totalPengeluaran = pengeluaranData.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);

    // console.log("Pemasukan data:", pemasukanData);
    console.log("Total pemasukan:", totalPemasukan);

    // console.log("Pengeluaran Data:", pengeluaranData);
    console.log("Total pengeluaran:", totalPengeluaran);

    const totalSaldo = totalPemasukan - totalPengeluaran
    console.log(`Total saldo anda: ${totalSaldo}`)

    // mendapatkan data keuangan bulan ini
    const bulan = "12";
    const filterdataberdasarkanbulan = dataKeuangan.filter(data => {
      const dataMonth = data.tanggal.split('/')[1];
      return dataMonth === bulan;
    });

    // console.log(filterdataberdasarkanbulan);

    const jenistotalperbulan = filterdataberdasarkanbulan.reduce((total, data) => {
      const jenis = data.jenis;
      const nilai = parseInt(data.nilai);
    
      if (total[jenis] !== undefined) {
        total[jenis] += nilai;
      } else {
        total[jenis] = nilai;
      }
    
      return total;
    }, {});
    
    // Access the total for "Pemasukan" and "Pengeluaran"
    const totalPemasukann = jenistotalperbulan['Pemasukan'] || 0;
    const totalPengeluarann = jenistotalperbulan['Pengeluaran'] || 0;
    
    console.log(`Total Pemasukan bulan ini: ${totalPemasukann}`);
    console.log(`Total Pengeluaran bulan ini: ${totalPengeluarann}`);
    

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

ReadDatabase();
