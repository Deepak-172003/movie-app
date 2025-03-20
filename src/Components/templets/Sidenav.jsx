import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-600 p-8">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>

        <span className="text-2xl">MovieMania</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-base gap-2 mb-1">
        <h1 className="text-white font-semibold text-xl mt-10 mb-4">
          New Feeds
        </h1>
        <Link to={'/trending'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300 p-3   ">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link to={'/popular'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300  p-3 ">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link to={'/movies'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300 p-3 ">
          <i className="mr-2 ri-clapperboard-fill"></i>
          Movies
        </Link>
        <Link to={'/tv'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300 p-3 ">
          <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link to={'/person'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300 p-3 ">
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-base gap-2">
        <h1 className="text-white font-semibold text-xl mt-5 mb-2">
          Website Information
        </h1>
        <Link to={'/about'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300 p-3 ">
        <i className="mr-2 ri-information-fill"></i>About
        </Link>
        <Link to={'/contact'} className="hover:bg-[#6556CD]  hover:text-white rounded-lg duration-300 p-3">
        <i className=" mr-2 ri-phone-fill"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
