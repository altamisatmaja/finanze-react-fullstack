import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';

function PieChartPemasukan() {
  useEffect(() => {
    const dataPie = {
      labels: ["Investasi", "Gaji", "Bisnis"],
      datasets: [
        {
          label: "Laporan Keuangan",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
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