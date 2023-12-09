import React from "react";

function Header() {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 justify-between">
      <h1 className="text-white text-3xl font-semibold font-Montserrat">
        CRUD
      </h1>
      <button className="w-48 bg-blue-300 text-white font-semibold text-xl h-12 rounded-lg">
        Tambahkan
      </button>
    </div>
  );
}

export default Header;
