import React, { useState } from 'react';

function Beranda() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="w-full">
          <nav className="bg-white shadow-lg">
            <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                  <a href="#">Brand</a>
                </div>
                <div className="md:hidden">
                  <button
                    type="button"
                    className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path
                        className={!isMenuOpen ? '' : 'hidden'}
                        d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                      />
                      <path
                        className={isMenuOpen ? '' : 'hidden'}
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} flex-grid md:flex-row`}>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  Beranda
                </a>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  Laporan
                </a>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  Dashboard
                </a>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  Rekap Investasi
                </a>
                <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  Start Now
                </a>
              </div>
            </div>
          </nav>
            <div className="flex bg-white" style={{ height: '600px' }}>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
                        <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                            <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                    <div className="h-full object-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)' }}>
                        <div className="h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section>
        <div className="bg-blue-700 text-white py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                Here's your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
                fest.
                </p>
                <a href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Explore Now</a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}                    ></div>
                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}                    ></div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Pick your favourite event(s) and register in that event by filling the form corresponding to that
                        event. Its that easy :
                        </p>
                    </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Participate online. The links for your registered events will be sent to you via email and whatsapp
                        groups. Use those links and show your talent.
                        </p>
                    </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to you.
                        </p>
                    </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                        their addresses.
                        </p>
                    </div>
                    </div>
                </div>
                <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}
export default Beranda