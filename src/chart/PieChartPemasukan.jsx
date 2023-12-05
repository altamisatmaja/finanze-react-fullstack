import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';
import axios from 'axios';

function PieChartPemasukan() {
  const [totalPemasukanArray, setTotalPemasukanArray] = useState([]);
  const [totalPengeluaranArray, setTotalPengeluaranArray] = useState([]);

  const [dataKeuangan, setDataKeuangan] = useState([]);

  // console.log(dataKeuangan);
  
  useEffect(() => {
    const ReadDatabase = async () => {
      try {
        const response = await axios.get("http://localhost:8087/datakeuangan");
        const dataKeuangan = response.data;
    
        const bulan1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    
        const filterDataByMonth = (dataKeuangan, month) => {
          return dataKeuangan.filter(data => {
            const dataMonth = data.tanggal ? data.tanggal.split('-')[1] : null;
            return dataMonth === month || dataMonth === null;
          });
        };
    
        const result = bulan1.map(month => {
          const filteredData = filterDataByMonth(dataKeuangan, month);
    
          const pemasukanbulan1an = filteredData.filter(data => data.jenis === 'Pemasukan');
          const Pengeluaranbulan1an = filteredData.filter(data => data.jenis === 'Pengeluaran');
    
          const totalPemasukan12 = pemasukanbulan1an.reduce((total, data) => total + parseInt(data.nilai), 0);
          const totalPengeluaran2 = Pengeluaranbulan1an.reduce((total, data) => total + parseInt(data.nilai), 0);
    
          setTotalPemasukanArray(prevArray => [...prevArray, totalPemasukan12]);
          setTotalPengeluaranArray(prevArray => [...prevArray, totalPengeluaran2]);
    
          return {
            month: month,
            totalPemasukan12: totalPemasukan12,
            totalPengeluaran2: totalPengeluaran2,
          };
        });
    
        console.log(result);
        console.log(totalPemasukanArray);
        console.log(totalPengeluaranArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    ReadDatabase();
  }, []);

  useEffect(() => {
    const dataPie = {
      labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      datasets: [
        {
          label: "Pemasukan",
          data: totalPemasukanArray,
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(121, 143, 241)",
            "rgb(131, 123, 241)",
            "rgb(141, 153, 241)",
            "rgb(151, 163, 241)",
            "rgb(161, 173, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    const canvasElement = document.getElementById("chartPiePemasukan");

    if (canvasElement) {
      const chartInstance = Chart.getChart(canvasElement);
      if (chartInstance) {
        chartInstance.destroy();
      }
    }

    new Chart(canvasElement, configPie);
  }, []);

  return (
    <div>
      <div className='w-60 h-60 font-Montserrat font-bold'>
          <div className="shadow-lg rounded-lg overflow-hidden">
              <div className="py-3 px-5 bg-gray-50">Pie chart</div>
              <canvas className="p-1" id="chartPiePemasukan"></canvas>
          </div>
      </div>
    </div>
  )
}

export default PieChartPemasukan;