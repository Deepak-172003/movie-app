// import React from 'react'

// const NotFound = () => {
//   return (
//     <div className='w-screen h-screen flex justify-center items-center bg-black' >
//       <h1 className='text-white'>Not Found</h1>
//       <img className='h-[50%] object-cover' src="" alt="" />
//     </div>
//   )
// }

// export default NotFound
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-[#1F1E24] ">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="404 Not Found"
          className="w-[300px] mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-zinc-400 text-lg mb-6 max-w-md">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-[#6556CD] hover:bg-[#5144b3] transition-colors px-6 py-3 rounded-full text-white font-semibold"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

