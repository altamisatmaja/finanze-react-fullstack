import React, { useEffect, useState } from "react";
import finanzelogo from "../assets/logofigma.png";
import PieChartPemasukan from "../chart/PieChartPemasukan";
import PieChartPengeluaran from "../chart/PieChartPengeluaran";
import { Line } from "react-chartjs-2";
import Sidebar from "../includes/Sidebar";
import axios from "axios";

function Statistik() {
  const [totalPemasukanArray, setTotalPemasukanArray] = useState([]);
  const [totalPengeluaranArray, setTotalPengeluaranArray] = useState([]);

  const [dataKeuangan, setDataKeuangan] = useState([]);

  useEffect(() => {
    const ReadDatabase = async () => {
      try {
        const response = await axios.get("http://localhost:8087/datakeuangan");
        const dataKeuangan = response.data;

        const bulan1 = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];

        const filterDataByMonth = (dataKeuangan, month) => {
          return dataKeuangan.filter((data) => {
            const dataMonth = data.tanggal ? data.tanggal.split("-")[1] : null;
            return dataMonth === month || dataMonth === null;
          });
        };

        const result = bulan1.map((month) => {
          const filteredData = filterDataByMonth(dataKeuangan, month);

          const pemasukanbulan1an = filteredData.filter(
            (data) => data.jenis === "Pemasukan"
          );
          const Pengeluaranbulan1an = filteredData.filter(
            (data) => data.jenis === "Pengeluaran"
          );

          const totalPemasukan12 = pemasukanbulan1an.reduce(
            (total, data) => total + parseInt(data.nilai),
            0
          );
          const totalPengeluaran2 = Pengeluaranbulan1an.reduce(
            (total, data) => total + parseInt(data.nilai),
            0
          );

          setTotalPemasukanArray((prevArray) => [
            ...prevArray,
            totalPemasukan12,
          ]);
          setTotalPengeluaranArray((prevArray) => [
            ...prevArray,
            totalPengeluaran2,
          ]);

          return {
            month: month,
            totalPemasukan12: totalPemasukan12,
            totalPengeluaran2: totalPengeluaran2,
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    ReadDatabase();
  }, []);

  const data = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "Pemasukan",
        data: totalPemasukanArray,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const data2 = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "Pengeluran",
        data: totalPengeluaranArray,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
      <Sidebar />
      <main className="main -ml-48 w-full flex-col px-4 transition-all duration-150 ease-in md:ml-0">
        <div className="px-5">
          <h1 className="font-Epilogue text-4xl font-bold">Statistik</h1>
          <p className="font-semibold text-2xl mt-2">Statistik Keuanganmu!</p>
        </div>
        <div>
          <div className="mb-10 flex">
            <div className="w-full px-5">
              <div>
                <div className="font-Montserrat font-bold">
                  <div className="shadow-lg rounded-lg overflow-hidden">
                    <div className="py-3 px-5 bg-gray-50">Line Chart</div>
                    <div className="p-1">
                      <Line data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 flex">
            <div className="w-full px-5">
              <div>
                <div className="font-Montserrat font-bold">
                  <div className="shadow-lg rounded-lg overflow-hidden">
                    <div className="py-3 px-5 bg-gray-50">Line Chart</div>
                    <Line data={data2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Statistik;
