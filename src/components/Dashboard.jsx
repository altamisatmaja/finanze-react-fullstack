import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import finanzelogo from "../assets/logofigma.png";
import Sidebar from "../includes/Sidebar.jsx";
import axios from 'axios';

function Dashboard() {
    const navigate = useNavigate();
    const [dataKeuangan, setDataKeuangan] = useState([]);
    const [dataPemasukanStack, setDataPemasukanStack] = useState([]);
    const [dataPengeluaranStack, setDataPengeluaranStack] = useState([]);

    const [id, idchange] = useState("");
    const [tanggal, tanggalchange] = useState("");
    const [kategori, kategorichange] = useState("");
    const [keterangan, keteranganchange] = useState("");
    const [nilai, nilaichange] = useState("");
    const [jenis, jenischange] = useState("");

    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            navigate('/login');
        };
        
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8087/datakeuangan");
            setDataKeuangan(response.data.reverse());
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        // ?_start=0&_end=5
        fetchData();
  }, []);

  // mendapatkan semua data dari nilai 
  const totalnilai = dataKeuangan.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);

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

  // mendapatkan data nilai dari masing2 jenis
  const pemasukanData = dataKeuangan.filter(data => data.jenis === "Pemasukan");

  const pengeluaranData = dataKeuangan.filter(data => data.jenis === "Pengeluaran");

  // normalisasi
  const totalPemasukan = pemasukanData.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);
  const totalPengeluaran = pengeluaranData.reduce((tambah, data) => tambah + parseInt(data.nilai), 0);

  const totalSaldo = totalPemasukan - totalPengeluaran

  // mendapatkan data keuangan bulan ini
  const bulan = "12";
  const filterdataberdasarkanbulan = dataKeuangan.filter(data => {
    const dataMonth = data.tanggal.split('/')[1];
    // const dataMonth = data.tanggal.split('-')[1];
    return dataMonth === bulan;
  });

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

  return (
    <>
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
        <Sidebar/>
        <main className="main w-5/6 flex-col px-4 transition-all duration-150 ease-in md:ml-0">
            <div className="h-full items-center justify-center text-start text-3xl font-bold">
                <div className='px-5'>
                    <h1 className='font-Epilogue text-4xl'>Input Data Keuangan</h1>
                    <p className='font-semibold text-3xl mt-2'>Selamat datang, user! 😉👋</p>
                </div>
                <div className='px-5 mt-5 flex justify-between'>
                    <div className='text-white flex-grid w-52 h-28 px-2 py-2 bg-blue-600 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform ease-in-out'>
                        <p className='text-sm font-medium'>Saldo</p>
                        <h1 className='text-2xl mt-3 font-semibold'>Rp {totalSaldo}</h1>
                        <p className='text-sm font-medium mt-3'>Keseluruhan</p>
                    </div>
                    <div className='text-white flex-grid w-52 h-28 px-2 py-2 bg-yellow-400 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform ease-in-out'>
                        <p className='text-sm font-medium'>Pemasukan</p>
                        <h1 className='text-2xl mt-3 font-semibold'>Rp {totalPemasukan}</h1>
                        <p className='text-sm font-medium mt-3'>Per bulan oktober</p>
                    </div>
                    <div className='text-white flex-grid w-52 h-28 px-2 py-2 bg-red-500 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform ease-in-out'>
                        <p className='text-sm font-medium'>Pengeluaran</p>
                        <h1 className='text-2xl mt-3 font-semibold'>Rp {totalPengeluaran}</h1>
                        <p className='text-sm font-medium mt-3'>Per bulan oktober</p>
                    </div>
                </div>
                
                <div className='mt-5 py-3 px-5 w-full border-collapse rounded-md bg-white text-left text-sm text-gray-500'>
                    <h1 className='font-Epilogue font-bold text-3xl text-black justify-center flex'>Histori Transaksi</h1>
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tanggal Transaksi</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Keterangan Transaksi</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Kategori Transaksi</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nilai Transaksi</th>
                            </tr>
                        </thead>
                    {dataKeuangan.slice(0, 5).map((data, id) => (
                        <tbody key={id} className="divide-y divide-gray-100 border-t border-gray-100">
                            <tr className="hover:bg-gray-50">
                                <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                                    {data.tanggal}
                                </th>
                                <td className="px-6 py-4">
                                    {data.keterangan}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{data.jenis}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                    >
                                        Rp {data.nilai}
                                    </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                    </table>
                </div>
            </div>
        </main>
        
        <nav className="w-1/4 h-full sidebar">
            <div className='flex w-96 px-2 py-3'>
                <p className='font-Epilogue flex font-semibold text-2xl'>Detail Cash Flow 💸</p>
            </div>
            <div key={id} className="w-full mx-autopx-2 px-2 py-3 bg-white h-full rounded-lg mb-5">
                <p className='font-Epilogue font-semibold text-xl'>Pemasukan</p>
                {pemasukanData.slice(0, 5).map((data, id) => (
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>{data.kategori}</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp {data.nilai}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="w-full mx-autopx-2 px-2 py-3 bg-white h-full rounded-lg">
                <p className='font-Epilogue font-semibold text-xl'>Pengeluaran</p>
                {pengeluaranData.slice(0, 5).map((data, id) => (
                <div className='flex justify-between mb-2'>
                    <p className='font-semibold items-center flex'>{data.kategori}</p>
                    <div className='w-28 h-10 bg-blue-700 flex rounded-md justify-center items-center'>
                        <p className='text-white'>Rp {data.nilai}</p>
                    </div>
                </div>
                ))}
            </div>
        </nav>
    </div>
    </>
  )
}

export default Dashboard