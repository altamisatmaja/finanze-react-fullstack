import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [dataToEdit, setDataToEdit] = useState({
    tanggal: '',
    keterangan: '',
    kategori: '',
    nilai: '',
    jenis: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8087/datakeuangan/${id}`)
      .then((res) => {
        setDataToEdit(res.data);
      })
      .catch((error) => {
        console.error('Gagal mengambil data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8087/datakeuangan/${id}`, dataToEdit)
      .then((response) => {
        if (response.status === 200) {
          alert('Data berhasil diubah');
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error);
      });
  };

  return (
    <div className='w-full mt-10'>
      <div className='px-2'>
        <h1 className='text-center font-Epilogue text-4xl font-bold'>Edit Data Keuangan</h1>
      </div>
      <div className='w-1/2 mt-10 mx-auto justify-center px-10 py-5 rounded-xl bg-slate-100 shadow-lg mb-10'>
        <form action="" onSubmit={handleSubmit}>
          <div className='mt-2 justify-between'>
            <div className='px-2'>
              <p className='text-lg font-medium'>Tanggal Transaksi</p>
              <input required type="text" value={dataToEdit.tanggal} onChange={(e) => setDataToEdit({ ...dataToEdit, tanggal: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Keterangan Transaksi</p>
              <input required type="text" value={dataToEdit.keterangan} onChange={(e) => setDataToEdit({ ...dataToEdit, keterangan: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Kategori Transaksi</p>
              <input required type="text" value={dataToEdit.kategori} onChange={(e) => setDataToEdit({ ...dataToEdit, kategori: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200'/>
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Nilai Transaksi</p>
              <input required type="text" value={dataToEdit.nilai} onChange={(e) => setDataToEdit({ ...dataToEdit, nilai: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
            <div className='px-2 mt-5'>
              <p className='text-lg font-medium'>Jenis</p>
              <input required type="text" value={dataToEdit.jenis} onChange={(e) => setDataToEdit({ ...dataToEdit, jenis: e.target.value })} className='border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200' />
            </div>
          </div>
          <div className='px-2 items-center justify-between'>
            <p className='text-slate-500 text-sm font-medium pt-4 text-center'>*Data yang Anda inputkan akan masuk kedalam database kami!</p>
            <div className='pt-4 flex gap-2'>
              <button type='submit' className='bg-blue-900 h-10 w-full rounded-lg px-2 mr-2 text-sm font-semibold text-white'>Simpan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
