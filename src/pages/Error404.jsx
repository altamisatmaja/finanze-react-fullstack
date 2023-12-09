import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Error404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-indigo-500 font-bold text-7xl">404</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            Page Not Found
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <Link to="/">
          <div className="flex justify-center mt-5">
            <div className="text-white rounded-lg bg-blue-700 px-5 py-2 font-bold text-xl">
              <p className="text-white font-semibold m-auto">Home</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Error404;
