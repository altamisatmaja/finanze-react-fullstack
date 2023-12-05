import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function InputKeuangan() {
  const navigate = useNavigate();

  const [datakeuangan, setDataKeuangan] = useState([]);
  const [caridata, setCariData] = useState([]);
  
  const [id, idchange] = useState("");
  const [kategori, kategorichange] = useState("");
  const [keterangan, keteranganchange] = useState("");
  const [nilai, nilaichange] = useState("");
  const [jenis, jenischange] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    ReadDatabase();
  }, []);

  const ReadDatabase = async () => {
    axios.get("http://localhost:8087/datakeuangan")
      .then((res) => {
        setDataKeuangan(res.data);
      })
  }
  
  function AutoGenerateID() {
    return new Date().getTime();
  }

  function Bersihkan() {
    tanggalchange("");
    kategorichange("");
    keteranganchange("");
    nilaichange("");
    jenischange("");
  }

  const handleSubmit = (e, jenistransaksi) => {
    e.preventDefault();
    const newID = AutoGenerateID();
  
    let regobj = {
      id: newID,
      tanggal,
      keterangan,
      kategori,
      nilai,
      jenis: jenistransaksi,
    };
  
    fetch(`http://localhost:8087/datakeuangan`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(regobj)
    }).then((res) => {
      alert('Data Berhasil Disimpan');
      ReadDatabase();
      Bersihkan();
    }).catch((err) => {
      toast.error('Gagal: ' + err.message);
    });
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8087/datakeuangan/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        alert('Data Berhasil Dihapus');
        ReadDatabase();
      })
      .catch((err) => {
        toast.error('Gagal menghapus data: ' + err.message);
      });
  }

  const HandleSearch = async (e) => {
    e.preventDefault();
    return await axios.get(`http://localhost:8087/datakeuangan?q=${caridata}`)
    .then((res) => {
      setDataKeuangan(res.data);
      setCariData("");
      })
  }

  const HandleFilter = async (value) => {
    return await axios
    .get(`http://localhost:8087/datakeuangan?jenis=${value}`)
    .then((res) => {
      setDataKeuangan(res.data);
      setCariData("");
      })
  }

  const HandleReset = () => {
    ReadDatabase();
  }

  const [tanggal, settanggal] = useState(new Date());
  
  return (
    <>
    <div className='w-full'>
      <div className='px-2'>
        <h1 className='font-Epilogue'>Input Data Keuangan</h1>
      </div>
      <div>
        <form action="" className='' onSubmit={handleSubmit}>
          <div className='flex mt-2 justify-between'> 
            <div className='px-2'>
              <p className='text-lg font-medium'>Tanggal Transaksi</p>                            
              <input required type="date" value={tanggal} onChange={e => settanggal(e.target.value)}  className='border w-56 rounded-md px-2 h-10 text-sm font-medium border-blue-200'/>
            </div>
            <div className='px-2'>
              <p className='text-lg font-medium'>Keterangan Transaksi</p>
              <input required type="text" placeholder='Beli makan' value={keterangan} onChange={e => keteranganchange(e.target.value)} className='border w-56 rounded-md px-2 h-10 text-sm font-medium border-blue-200'/>
            </div>
            <div className='px-2'>
              <p className='text-lg font-medium'>Kategori Transaksi</p>
              <input required type="text" placeholder='Makanan' value={kategori} onChange={e => kategorichange(e.target.value)} className='border w-56 rounded-md px-2 h-10 text-sm font-medium border-blue-200'/>
            </div>
            <div className='px-2'>
              <p className='text-lg font-medium'>Nilai Transaksi</p>
              <input required type="text" placeholder='10000' value={nilai} onChange={e => nilaichange(e.target.value)} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200'/>
            </div>
          </div>
          <div className='flex px-2 items-center justify-between'>
            <p className='text-slate-500 text-sm font-medium pt-4'>*Data yang Anda inputkan akan masuk kedalam database kami!</p>
            <div className='pt-4 flex gap-2'>
              <button type='submit' onClick={Bersihkan} className='bg-blue-900 h-8 w-24 rounded-lg px-2 mr-2 text-sm font-semibold text-white'>Bersihkan</button>
              <button type='submit' onClick={(e) => handleSubmit(e, 'Pemasukan')} className='bg-blue-700 h-8 w-50 rounded-lg px-1 mr-2 text-sm font-semibold text-white'>Tambah Pemasukan</button>
              <button type='submit' onClick={(e) => handleSubmit(e, 'Pengeluaran')} className='bg-blue-700 h-8 w-50 rounded-lg px-1 text-sm font-semibold text-white'>Tambah Pengeluaran</button>
            </div>
          </div>
        </form>
        <form onSubmit={HandleSearch}>
        <div>
          <div>
            <p className='text-slate-500 text-sm font-medium pt-4'>Cari data</p>
          </div>
          <input value={caridata} onChange={(e) => setCariData(e.target.value)} type="text" name="" id="" />
          <button className='bg-blue-900 h-8 w-24 rounded-lg px-2 mr-2 text-sm font-semibold text-white'>Cari</button>
          <button onClick={HandleReset} className='bg-blue-900 h-8 w-24 rounded-lg px-2 mr-2 text-sm font-semibold text-white'>Bersihkan</button>
        </div>
        </form>
        <div>
          <p className='text-slate-500 text-sm font-medium pt-4'>Cari berdasarkan jenis:</p>
          <button onClick={() => HandleFilter("Pemasukan")} className='bg-blue-900 h-8 w-24 rounded-lg px-2 mr-2 text-sm font-semibold text-white' >Pemasukan</button>
          <button onClick={() => HandleFilter("Pengeluaran")} className='bg-blue-900 h-8 w-24 rounded-lg px-2 mr-2 text-sm font-semibold text-white' >Pengeluaran</button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5 mx-2">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tanggal Transaksi</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Keterangan Transaksi</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Kategori Transaksi</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nilai Transaksi</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Aksi</th>
          </tr>
        </thead>
        {datakeuangan.length === 0 ? (
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <tr>
            <td className=''>Tidak ada data</td>
          </tr>
        </tbody>
        ) : datakeuangan.map((data, id) => (
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          <tr key={id} className="hover:bg-gray-50">
            <th className="px-6 py-4">
              {data.tanggal}
            </th>
            <td className="px-6 py-4">
              {data.keterangan}
            </td>
            <td className="px-6 py-4">
              <div className="text-sm">
                <div className="font-medium text-gray-700">{data.jenis}</div>
                <div className="text-gray-400">{data.kategori}</div>
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
            <td className="px-6 py-4">
              <div className="flex gap-4">
                <button onClick={() => handleDelete(data.id)}>
                  <a x-data="{ tooltip: 'Delete' }" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </a>
                </button>
                <Link to={`/edit/${data.id}`}>
                  <button>
                    <a x-data="{ tooltip: 'Edit' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
  </div>
  </>
  )
}

export default InputKeuangan;