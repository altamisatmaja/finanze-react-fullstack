import axios from 'axios';

let dataKeuangan = [];

const ReadDatabase = async () => {
  try {
    const response = await axios.get("http://localhost:8087/datakeuangan");
    dataKeuangan = response.data;
    // console.log(dataKeuangan);

    // mendapatkan semua data dari nilai 
    const totalnilai = dataKeuangan.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);
    // console.log(`Total pemasukan dan pengeluaran: ${totalnilai}`)

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
    
    // console.log(pemasukanData);

    // get each 
    const tes = pemasukanData.map(data => data.nilai);
    // console.log(tes);

    // const cobaaah = pemasukanData['nilai'];
    // console.log(cobaaah);

    const datalahh = pemasukanData.filter(key => key.type === "nilai")
    
    const pengeluaranData = dataKeuangan.filter(data => data.jenis === "Pengeluaran");
    // console.log(pengeluaranData)

    // normalisasi
    const totalPemasukan = pemasukanData.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);
    const totalPengeluaran = pengeluaranData.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);

    // console.log("Pemasukan data:", pemasukanData);
    // console.log("Total pemasukan:", totalPemasukan);

    // console.log("Pengeluaran Data:", pengeluaranData);
    // console.log("Total pengeluaran:", totalPengeluaran);

    const totalSaldo = totalPemasukan - totalPengeluaran
    // console.log(`Total saldo anda: ${totalSaldo}`)

    // mendapatkan data keuangan bulan ini

    // mendapatkan data keuangan sesuai bulan
    // const bulan = "03";
    const bulan = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const filterdataberdasarkanbulan = dataKeuangan.filter(data => {
      const dataMonth = data.tanggal.split('-')[1];
      return dataMonth === bulan;
    });

    // console.log(filterdataberdasarkanbulan);

    // mengambil nilai berdasarkan jenis
    // pemasukan

    const pemasukanbulanan = filterdataberdasarkanbulan.filter(data => data.jenis === 'Pengeluaran')
    // console.log(pemasukanbulanan.map(data => data.nilai))
    // console.log(pemasukanbulanan.reduce((tambah, data) => tambah + parseInt(data.nilai), 0))


    // mendapatkan data keuangan 12 bulan secara berurutan
    // const urutanbulan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    // const dataperbulan = dataKeuangan.filter( data => {
    //   dataKeuangan.map( data => {
    //     const dataperbulannya = data.tanggal.split('/')[1];
    //     return dataperbulannya === urutanbulan
    //   })
    // })

    // const urutanbulan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // const dataperbulan = {};
    
    // urutanbulan.forEach(bulan => {
    //   dataperbulan[bulan] = dataKeuangan.filter(data => {
    //     const dataperbulannya = parseInt(data.tanggal.split('/')[0], 10);
    //     return dataperbulannya === bulan;
    //   });
    // });
    
    // console.log(dataperbulan);
    
    // console.log(dataperbulan);

    // const jenistotalperbulan = filterdataberdasarkanbulan.reduce((total, data) => {
    //   const jenis = data.jenis;
    //   const nilai = parseInt(data.nilai);
    
    //   if (total[jenis] !== undefined) {
    //     total[jenis] += nilai;
    //   } else {
    //     total[jenis] = nilai;
    //   }
    
    //   return total;
    // }, {});
    
    // // Access the total for "Pemasukan" and "Pengeluaran"
    // const totalPemasukann = jenistotalperbulan['Pemasukan'] || 0;
    // const totalPengeluarann = jenistotalperbulan['Pengeluaran'] || 0;
    
    // console.log(`Total Pemasukan bulan ini: ${totalPemasukann}`);
    // console.log(`Total Pengeluaran bulan ini: ${totalPengeluarann}`);
  


    // // mendapatkan data perbulan dan 
    // const jenistotalperbulan1 = filterdataberdasarkanbulan.reduce((total, data) => {
    //   const jenis = data.jenis;
    //   const nilai = parseInt(data.nilai);
    
    //   if (total[jenis] !== undefined) {
    //     total[jenis] += nilai;
    //   } else {
    //     total[jenis] = nilai;
    //   }
    
    //   return total;
    // }, {});
    
    // // Access the total for "Pemasukan" and "Pengeluaran"
    // const totalPemasukannm = jenistotalperbulan1['Pemasukan'] || 0;
    // const totalPengeluarannn = jenistotalperbulan1['Pengeluaran'] || 0;
    
    // console.log(`Total Pemasukan bulan ini: ${totalPemasukannm}`);
    // console.log(`Total Pengeluaran bulan ini: ${totalPengeluarannn}`);

//     const bulan1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
//   const filterdataberdasarkanbulan1 = dataKeuangan.filter(data => {
//   const dataMonth = data.tanggal ? data.tanggal.split('-')[1] : null;
//   return bulan1.includes(dataMonth) || dataMonth === null;
// });

// console.log(filterdataberdasarkanbulan1);

// const pemasukanbulan1an = filterdataberdasarkanbulan1.filter(data => data.jenis === 'Pemasukan' || null);
// const Pengeluaranbulan1an = filterdataberdasarkanbulan1.filter(data => data.jenis === 'Pengeluaran' || null);
// console.log(pemasukanbulan1an.map(data => data.nilai));

// console.log(Pengeluaranbulan1an.map(data => data.nilai));

// console.log(pemasukanbulan1an)
// console.log(Pengeluaranbulan1an)

const bulan1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const filterDataByMonth = (dataKeuangan, month) => {
  return dataKeuangan.filter(data => {
    const dataMonth = data.tanggal ? data.tanggal.split('-')[1] : null;
    return dataMonth === month || dataMonth === null;
  });
};


const totalPemasukanArray = []
const totalPengeluaranArray = []

const result = bulan1.map(month => {
  const filteredData = filterDataByMonth(dataKeuangan, month);
  
  const pemasukanbulan1an = filteredData.filter(data => data.jenis === 'Pemasukan');
  const Pengeluaranbulan1an = filteredData.filter(data => data.jenis === 'Pengeluaran');

  const totalPemasukan12 = pemasukanbulan1an.reduce((total, data) => total + parseInt(data.nilai), 0);
  const totalPengeluaran2 = Pengeluaranbulan1an.reduce((total, data) => total + parseInt(data.nilai), 0);
  
  // console.log(`Pemasukan bulanan ${result(totalPemasukan12)}`)
  // console.log(`Pengeluaran bulanan ${totalPengeluaran2}`)

  // return {totalPemasukan12: totalPemasukan12};
  // return {totalPengeluaran2: totalPengeluaran2};
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

// console.log(pemasukanbulan1an.reduce((tambah, data) => tambah + parseInt(data.nilai), 0));


  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

ReadDatabase();
