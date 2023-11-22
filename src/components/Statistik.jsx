import React, { useEffect } from 'react'
import finanzelogo from "../assets/logofigma.png";
import PieChartPemasukan from '../chart/PieChartPemasukan';
import PieChartPengeluaran from '../chart/PieChartPengeluaran';
import { Line } from "react-chartjs-2";
import Sidebar from '../includes/Sidebar';

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

function Statistik() {
  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 p-5">
        <Sidebar/>
        <main className="main -ml-48 w-full flex-col px-4 transition-all duration-150 ease-in md:ml-0">
            <div className='px-5'>
                <h1 className='font-Epilogue text-4xl font-bold'>Statistik</h1>
                <p className='font-semibold text-2xl mt-2'>Statistik Keuanganmu!</p>
            </div>
            <div>
                <div className='mb-10 flex'>
                    <PieChartPemasukan/>
                    <div className='w-[32rem] px-5'>
                        <div>
                            <div className='font-Montserrat font-bold'>
                                <div className="shadow-lg rounded-lg overflow-hidden">
                                    <div className="py-3 px-5 bg-gray-50">Line Chart</div>
                                    <div className="p-1 h-60"><Line data={data} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='flex'>
                    <PieChartPengeluaran/>
                    <div className='w-full px-5'>
                        <Line data={data} />
                    </div>
                </div> */}
            </div>
        </main>
    </div>
  )
}

export default Statistik