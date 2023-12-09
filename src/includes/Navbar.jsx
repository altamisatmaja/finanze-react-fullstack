import React from "react";
import logo from "../assets/logofigma.png";
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
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
                  <Link to={"/"}>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-300"
                      >
                        <span>Beranda</span>
                      </a>
                    </li>
                  </Link>
                  <Link to={"/laporan"}>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-300"
                      >
                        <span>Laporan</span>
                      </a>
                    </li>
                  </Link>
                  <Link to={"/dashboard"}>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-300"
                      >
                        <span>Dashboard</span>
                      </a>
                    </li>
                  </Link>
                  <Link to={"/rekapinvestasi"}>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-300"
                      >
                        <span>Rekap Investasi</span>
                      </a>
                    </li>
                  </Link>
                  <Link to={"/login"}>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-300"
                      >
                        <span className="border-solid border-yellow-300 rounded-xl border-2 px-8 py-2">
                          Login
                        </span>
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
