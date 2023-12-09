import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../includes/Sidebar";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Select from "react-select";

function InputInvestasi() {
  const [datainvestasi, setDataInvestasi] = useState([]);
  const [datakombinasi, setDatakombinasi] = useState([]);
  const [datakeuangan, setDataKeuangan] = useState([]);

  const [id, idchange] = useState("");
  const [durasiinvestasi, durasiinvestasichange] = useState("");
  const [ticker, tickerchange] = useState("");
  const [perusahaan, perusahaanchange] = useState("");
  const [tickernamaperusahaan, tickernamaperusahaanchange] = useState("");
  const [lot, lotchange] = useState("");
  const [hargabeli, hargabelichange] = useState("");
  const [hargajual, hargajualchange] = useState("");
  const [persentase, persentasechange] = useState("");

  const ReadDatabase = async () => {
    axios.get("http://localhost:8087/inputinvestasi").then((res) => {
      setDataKeuangan(res.data);
    });
  };

  useEffect(() => {
    ReadDatabase();
  }, []);

  function autogenerateid() {
    return new Date().getTime();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const idbaru = autogenerateid();

    let tambahobject = {
      id: idbaru,
      durasiinvestasi,
      tickernamaperusahaan,
      lot,
      hargabeli,
      hargajual,
      persentase,
    };

    fetch("http://localhost:8087/inputinvestasi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tambahobject),
    })
      .then((res) => {
        alert("Data Berhasil Disimpan");
        ReadDatabase();
        Bersihkan();
      })
      .catch((err) => {
        toast.error("Gagal: " + err.message);
      });
  };

  function Bersihkan() {
    tanggalchange("");
    kategorichange("");
    keteranganchange("");
    nilaichange("");
    jenischange("");
  }

  const [dataSahamIDX, setdataSahamIDX] = useState([]);

  const fetchDataSaham = async () => {
    try {
      const response = await axios.get("http://localhost:8087/saham");
      const responseDatasaham = response.data;

      const datakombinasi = responseDatasaham.map((company) => ({
        symbol: company.symbol,
        nama: company.name,
        gabungan: `${company.symbol} - ${company.name}`,
      }));

      setdataSahamIDX(datakombinasi);
      console.log(datakombinasi);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataSaham();
  }, []);

  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
      <Sidebar />
      <main className="main w-full flex-col p-4 transition-all duration-150 ease-in md:ml-0">
        <div className="px-2">
          <h1 className="font-Epilogue font-bold text-2xl">
            Input Data Investasi
          </h1>
        </div>
        <div>
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="flex mt-2 justify-between">
              <div className="px-2">
                <p className="text-lg font-medium">Durasi Investasi</p>
                <input
                  value={durasiinvestasi}
                  onChange={(e) => durasiinvestasichange(e.target.value)}
                  required
                  type="date"
                  className="border w-56 rounded-md px-2 h-10 text-sm font-medium border-blue-200"
                />
              </div>
              <div className="px-2">
                <label htmlFor="perusahaan" className="text-lg font-medium">
                  Masukkan kode ticker atau nama perusahaan
                </label>
                <select
                  id="perusahaan"
                  className="border rounded-md px-2 h-10 text-sm font-medium border-blue-200"
                  value={tickernamaperusahaan}
                  onChange={(e) => {
                    console.log("Selected Value:", e.target.value);
                    tickernamaperusahaanchange(e.target.value);
                  }}
                >
                  {dataSahamIDX.map((option) => (
                    <option key={option.gabungan} value={option.gabungan}>
                      {option.gabungan}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-2">
                <p className="text-lg font-medium">Jumlah Lot</p>
                <input
                  value={lot}
                  onChange={(e) => lotchange(e.target.value)}
                  required
                  type="text"
                  className="border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200"
                />
              </div>
            </div>
            <div className="flex px-2 items-center justify-between">
              <div className="pt-4 flex gap-2">
                <div className="px-2">
                  <p className="text-lg font-medium">Harga Beli</p>
                  <input
                    value={hargabeli}
                    onChange={(e) => hargabelichange(e.target.value)}
                    required
                    type="text"
                    className="border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200"
                  />
                </div>
                <div className="px-2">
                  <p className="text-lg font-medium">Harga Jual</p>
                  <input
                    value={hargajual}
                    onChange={(e) => hargajualchange(e.target.value)}
                    required
                    type="text"
                    className="border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200"
                  />
                </div>
                <div className="mr-20">
                  <p className="text-lg font-medium">Persentase</p>
                  <input
                    value={persentase}
                    onChange={(e) => persentasechange(e.target.value)}
                    required
                    type="text"
                    className="border w-full rounded-md px-2 h-10 text-sm font-medium border-blue-200"
                  />
                </div>
                <div className="flex py-7">
                  <button
                    onClick={Bersihkan}
                    type="submit"
                    className="bg-blue-900 h-10 w-24 rounded-lg px-2 mr-2 text-sm font-semibold text-white"
                  >
                    Bersihkan
                  </button>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    className="bg-blue-700 h-10 w-52 rounded-lg px-1 mr-2 text-sm font-semibold text-white"
                  >
                    Tambah Pemasukan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-5 py-3 px-5 w-full border-collapse rounded-md bg-white text-left text-sm text-gray-500">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Tanggal Transaksi
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Jumlah Lot
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Harga Beli
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Harga Jual
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Persentase
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {datakeuangan.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {data.durasiinvestasi}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{data.lot} Lot</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                        Rp {data.hargabeli}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                        Rp {data.hargajual}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{data.persentase} %</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default InputInvestasi;
