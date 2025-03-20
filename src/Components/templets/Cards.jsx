import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full h-full  bg-[#1F1E24]">
    <div
      className="flex flex-wrap justify-center gap-8 px-[4%] py-[5%] bg-[#1F1E24] "
      style={{ backgroundColor: "#1F1E24" }}
    >
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} 
        
        className="relative w-[25vh]  transform transition duration-300 ease-in-out hover:scale-105  " key={i}>
          <img
            className="h-[40vh] rounded-md cursor-pointer  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />

          <h1 className="text-2xl text-zinc-400 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          
          {c.vote_average > 0 &&  (
            <div className="absolute right-[-10%] bottom-[35%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center ">
              
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Cards;
