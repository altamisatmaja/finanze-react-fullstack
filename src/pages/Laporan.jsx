import Sidebar from "../includes/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

function Laporan() {
  const [datakeuangan, setDataKeuangan] = useState([]);

  useEffect(() => {
    ReadDatabase();
  }, []);

  const ReadDatabase = async () => {
    axios.get("http://localhost:8087/datakeuangan").then((res) => {
      setDataKeuangan(res.data);
    });
  };

  const [datakeuanganbulanini, setDataKeuanganBulanIni] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8087/datakeuangan");
        const datakeuangan = response.data;

        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1;

        const datakeuanganbulanini = datakeuangan.filter((data) => {
          const dataMonth = new Date(data.tanggal).getUTCMonth() + 1;
          return dataMonth === month;
        });

        setDataKeuanganBulanIni(datakeuanganbulanini);
      } catch (error) {
        console.error("Error reading database:", error);
      }
    };

    fetchData();
  }, []);


  const pemasukanBulanIni = datakeuanganbulanini.filter(
    (data) => data.jenis === "Pemasukan"
  );
  const pengeluaranBulanIni = datakeuanganbulanini.filter(
    (data) => data.jenis === "Pengeluaran"
  );

  const datapemasukan = datakeuangan.filter(
    (data) => data.jenis === "Pemasukan"
  );
  const datapengeluaran = datakeuangan.filter(
    (data) => data.jenis === "Pengeluaran"
  );

  return (
    <div>
      <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
        <Sidebar />
        <div>
          <main>
            <div className="px-4">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Pemasukan bulan ini
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        List pemasukan bulan ini
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="w-full divide-y rounded-lg">
                            <thead className="">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Keterangan
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Tanggal
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Nilai
                                </th>
                              </tr>
                            </thead>
                            {pemasukanBulanIni.map((data, index) => (
                              <tbody key={index} className="bg-white">
                                <tr>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    <span className="font-semibold">
                                      {data.keterangan}
                                    </span>
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {data.tanggal}
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    Rp {data.nilai}
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Pengeluaran bulan ini
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        List pengeluaran bulan ini
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="w-full divide-y rounded-lg">
                            <thead className="">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Keterangan
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Tanggal
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Nilai
                                </th>
                              </tr>
                            </thead>
                            {pengeluaranBulanIni.map((data, index) => (
                              <tbody key={index} className="bg-white">
                                <tr>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    <span className="font-semibold">
                                      {data.keterangan}
                                    </span>
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {data.tanggal}
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    Rp {data.nilai}
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 mt-4">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        List semua pemasukan
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                      Berisi list semua pemasukan
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="w-full divide-y rounded-lg">
                            <thead className="">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Keterangan
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Tanggal
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Nilai
                                </th>
                              </tr>
                            </thead>
                            {datapemasukan.map((data, index) => (
                              <tbody key={index} className="bg-white">
                                <tr>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    <span className="font-semibold">
                                      {data.keterangan}
                                    </span>
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {data.tanggal}
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    Rp {data.nilai}
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                      List semua pengeluaran
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        Berisi list semua pemasukan
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          <table className="w-full divide-y rounded-lg">
                            <thead className="">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Keterangan
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Tanggal
                                </th>
                                <th
                                  scope="col"
                                  className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Nilai
                                </th>
                              </tr>
                            </thead>
                            {datapengeluaran.map((data, index) => (
                              <tbody key={index} className="bg-white">
                                <tr>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    <span className="font-semibold">
                                      {data.keterangan}
                                    </span>
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    {data.tanggal}
                                  </td>
                                  <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    Rp {data.nilai}
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Laporan;
