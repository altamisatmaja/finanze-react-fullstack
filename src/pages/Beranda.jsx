import React, { useState } from "react";
import logo from "../assets/logofigma.png";
import gambar from "./../assets/img/pichero.png";
import dompet from "./../assets/img/dompet.png";
import cetak from "./../assets/img/cetak.png";
import koin from "./../assets/img/koin.png";
import div from "./../assets/img/div.png";
import mac from "./../assets/img/mac.png";
import { useNavigate, Link } from 'react-router-dom';

function Beranda() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        {/* navbar*/}
        <div className="relative w-full">
          <nav className="fixed z-10 w-full bg-white md:absolute p-5 md:bg-transparent">
            <div className="container m-auto px-2 py-2 bg-blue-600 rounded-3xl md:px-12 lg:px-7">
              <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                  <a
                    href="#"
                    aria-label="logo"
                    className="flex space-x-2 items-center"
                  >
                    <img
                      src={logo}
                      className="w-1/2"
                      alt="finanze logo"
                      width="144"
                      height="133"
                    />
                  </a>

                  <button
                    aria-label="humburger"
                    id="hamburger"
                    className="relative w-10 h-10 -mr-2 lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                    ></div>
                  </button>
                </div>

                {/* hero section */}
                <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                  <div className="text-white lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-lg md:flex md:space-y-0">
                      <Link to={'/'}>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-yellow-300"
                        >
                          <span>Beranda</span>
                        </a>
                      </li>
                      </Link>
                      <Link to={'/laporan'}>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-yellow-300"
                        >
                          <span>Laporan</span>
                        </a>
                      </li>
                      </Link>
                      <Link to={'/dashboard'}>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-yellow-300"
                        >
                          <span>Dashboard</span>
                        </a>
                      </li>
                      </Link>
                      <Link to={'/rekapinvestasi'}>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-yellow-300"
                        >
                          <span>Rekap Investasi</span>
                        </a>
                      </li>
                      </Link>
                      <Link to={'/login'}>
                      <li>
                        <a
                          href="#"
                          className="block md:px-4 transition hover:text-yellow-300"
                        >
                          <span className="border-solid border-yellow-300 rounded-xl border-2 px-8 py-2">Login</span>
                        </a>
                      </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="relative bg-yellow-50 min-h-screen">
            <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
              <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                  <h1 className="font-bold text-4xl text-slate-900 md:text-6xl items-center lg:w-10/11">
                    Kendalikan uang anda, Wujudkan impian anda
                  </h1>
                  <p className="mt-8 text-gray-700 text-2xl lg:w-10/12">
                    Keuangan adalah hal yang krusial dalam hidup kita. Manage
                    your money and enjoy your long life with us
                  </p>
                  <div className="text-white mt-4 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                      <li>
                        <a
                          href="#"
                          className="block text-xl md:px-4 rounded-lg bg-blue-600 py-3 px-5 transition hover:text-yellow-300"
                        >
                          <span>Beranda</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block text-xl md:px-4 rounded-lg ml-5 text-slate-900 bg-white border-2 border-solid border-slate-800 py-3 px-5 transition hover:text-yellow-300"
                        >
                          <span>Dashboard</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                  <img
                    src={gambar}
                    className="relative"
                    alt="food illustration"
                    loading="lazy"
                    width="4500"
                    height="4500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* beda section */}
      <div class="antialiased w-full h-full bg-white text-gray-400 font-inter p-10">
        <div class="container px-4 mx-auto">
          <div>
            <div id="title" class="text-center my-10 w-1/2 mx-auto">
              <h1 class="font-bold text-6xl text-black">
                What our customers say about us ?
              </h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-2 pt-10">
              <div
                id="plan"
                class="rounded-2xl bg-gray-100 text-center px-5 overflow-hidden w-3/4 transform hover:shadow-2xl shadow-xl hover:scale-105 transition duration-200 ease-in"
              >
                <img src={dompet} alt="dompet" className="mx-auto"/>
                <h3 class="font-bold text-slate-800 text-2xl mt-2">
                  Melacak Keuanganmu!
                </h3>
                <div id="content" class="">
                  <div id="contain" class="leading-8 mb-10 text-lg text-slate-800 font-regular">
                    <ul>
                      <li>
                        Track your savings and build better spending habbits
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="plan"
                class="rounded-2xl bg-gray-100 text-center px-5 overflow-hidden w-3/4 transform hover:shadow-2xl shadow-xl hover:scale-105 transition duration-200 ease-in"
              >
                <img src={cetak} alt="dompet" className="mx-auto"/>
                <h3 class="font-bold text-slate-800 text-2xl mt-2">
                Teman Keuanganmu!
                </h3>
                <div id="content" class="">
                  <div id="contain" class="leading-8 mb-10 text-lg text-slate-800 font-regular">
                    <ul>
                      <li>
                      Accomplish your savings goals and investment goals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="plan"
                class="rounded-2xl bg-gray-100 text-center px-5 overflow-hidden w-3/4 transform hover:shadow-2xl shadow-xl hover:scale-105 transition duration-200 ease-in"
              >
                <img src={koin} alt="dompet" className="mx-auto"/>
                <h3 class="font-bold text-slate-800 text-2xl mt-2">
                  Rekap Investasi!
                </h3>
                <div id="content" class="">
                  <div id="contain" class="leading-8 mb-10 text-lg text-slate-800 font-regular">
                    <ul>
                      <li>
                      Redeem rewards when you accomplish your savings goals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-white-700 text-white py-8">
          <div className="container mx-auto my-10 md:my-14 flex items-center justify-center">
            <div className="flex items-center justify-center bg-blue-600 rounded-lg shadow-xl h-[30.41rem] overflow-y-hidden w-full">
              <div className="flex-grow relative text-left flex flex-col items-start p-8">
                <p className="text-3xl font-semibold text-white md:text-4xl mb-2">
                  Raih tujuan keuanganmu
                </p>
                <p className="text-3xl font-semibold text-white md:text-4xl mb-2">
                  bersama kami!
                </p>
                <p className="text-lg font-light text-white mb-1">
                  Lorem ipsum dolor sit amet, consectetur. nulla suspendisse
                  tortor aene.
                </p>
                <p className="text-lg font-light text-white mb-1">
                  Elit. Feugiat nulla suspendisse tortor aene.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border border-white border-solid text-white text-base font-semibold rounded-full transition duration-300 hover:bg-white hover:text-blue-600 hover:border-white mt-4"
                >
                  Start Now
                </a>
              </div>
              <img
                className="absolute right-0 pr-20 pb-16"
                src={div}
                alt="Div"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white-700 text-white py-8">
        <div className="container mx-auto my-10 md:my-14 flex items-center justify-center">
          <div className="text-center relative">
            <h2 className="text-5xl mb-2 font-bold text-gray-800 md:text-6xl">
              Mulai sekarang!
            </h2>
            <h2 className="text-2xl mb-2 font-medium text-gray-800 md:text-3xl">
              Menuju kebebasan finansial dengan Finanze
            </h2>
            <h2 className="text-2xl font-medium text-gray-800 md:text-3xl mb-20">
              Mulai sekarang dan jangan banyak alasan!
            </h2>
            <img
              src={mac}
              alt="Mac"
              className="mt-4"
              style={{ width: "971px", height: "585px" }}
            />
          </div>
        </div>
      </section>
      <section className="bg-white-700 text-white">
        <footer class="bg-blue-600 dark:bg-blue-600">
          <div class="container px-6 py-12 mx-auto">
            <div class="text-center">
              <img
                src={logo}
                alt="Logo"
                className="w-1/6 justify-center mx-auto"
              />
              <p class="max-w-xl text-2xl font-semibold mx-auto my-6 text-white">
                Teman keuanganmu yang akan membantu mencapai tujuan keuangan!
              </p>
            </div>

            <nav class="px-8">
              <div class="-mb-px flex justify-center">
                <Link to={'/'}>
                <a
                  class="no-underline text-teal-dark border-teal-dark font-regular text-xl py-3 mr-8"
                  href="#"
                >
                  Beranda
                </a>
                </Link>
                <Link to={'/laporan'}>
                <a
                  class="no-underline text-grey-dark border-transparent font-regular text-xl py-3 mr-8"
                  href="#"
                >
                  Laporan
                </a>
                {/* /Users/altamis/Documents/Semester 3/finanze-new/finanzereactailwind/finanze-project/src/components/InputInvestasi.jsx */}
                </Link>
                <Link to={'/dashboard'}>
                <a
                  class="no-underline text-grey-dark border-transparent font-regular text-xl py-3 mr-8"
                  href="#"
                >
                  Dashboard
                </a>
                </Link>
                <Link to={'rekapinvestasi'}>
                <a
                  class="no-underline text-grey-dark border-transparent font-regular text-xl py-3"
                  href="#"
                >
                  Rekap Investasi
                </a>
                </Link>
              </div>
            </nav>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Beranda;
