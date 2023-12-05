import axios from 'axios';

let dataKeuangan = [];

const ReadDatabase = async () => {
  try {
    const response = await axios.get("http://localhost:8087/datakeuangan");
    dataKeuangan = response.data;

const bulan1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const filterDataByMonth = (dataKeuangan, month) => {
  return dataKeuangan.filter(data => {
    const dataMonth = data.tanggal ? data.tanggal.split('-')[1] : null;
    return dataMonth === month || dataMonth === null;
  });
};

console.log(filterDataByMonth);

const totalPemasukanArray = []
const totalPengeluaranArray = []

const result = bulan1.map(month => {
  const filteredData = filterDataByMonth(dataKeuangan, month);
  
  const pemasukanbulan1an = filteredData.filter(data => data.jenis === 'Pemasukan');
  const Pengeluaranbulan1an = filteredData.filter(data => data.jenis === 'Pengeluaran');

  const totalPemasukan12 = pemasukanbulan1an.reduce((total, data) => total + parseInt(data.nilai), 0);
  const totalPengeluaran2 = Pengeluaranbulan1an.reduce((total, data) => total + parseInt(data.nilai), 0);

  totalPemasukanArray.push(totalPemasukan12);
  totalPengeluaranArray.push(totalPengeluaran2);


  return {
    month: month,
    totalPemasukan12: totalPemasukan12,
    totalPengeluaran2: totalPengeluaran2,
  };
});

console.log(result);

console.log(totalPemasukanArray)
console.log(totalPengeluaranArray)


  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

ReadDatabase();
