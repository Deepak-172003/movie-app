import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontalCard = ({ data }) => {
  return (
    // <div className="w-full p-5">
      

    //   {/* Scrollable container */}
    //   <div className="w-full flex overflow-x-auto  space-x-5 scrollbar-hide pb-5">
    //     {data.length > 0 ? data.map((d, i) => (
    //       <Link to={`/${d.media_type}/details/${d.id}`}
    //         key={i}
    //         className="min-w-[200px] h-[38vh] bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
    //       >
    //         <img
    //           className="w-full h-[150px] object-cover"
    //           src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`}
    //           alt={d.title || "Movie Poster"}
    //         />
    //         <div className="text-white p-3 overflow-y-auto ">
    //           <h1 className="text-lg font-semibold">
    //             {d.name || d.title || d.original_name || d.original_title}
    //           </h1>

    //           <p className="text-sm text-gray-400 mt-2  ">
    //             {d.overview.slice(0, 50)}...
    //             <button className="text-zinc-500 ml-1">more</button>
    //           </p>
    //         </div>
    //       </Link>
    //     )) : <h1 className="text-3xl text-white mt-5 font-black text-center" >Nothing to show</h1> }
    //   </div>
    // </div>
    <div className="w-full p-5">
  {/* Scrollable container */}
  <div className="w-full flex overflow-x-auto space-x-5 scrollbar-hide pb-5">
    {data.length > 0 ? data.map((d, i) => (
      <Link to={`/${d.media_type}/details/${d.id}`}
        key={i}
        className="min-w-[200px] h-[38vh] bg-zinc-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
      >
        <img
          className="w-full h-[150px] object-cover"
          src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`}
          alt={d.title || "Movie Poster"}
        />
        {/* scrollable text box */}
        <div className="text-white p-3 flex-1 overflow-y-auto">
          <h1 className="text-lg font-semibold">
            {d.name || d.title || d.original_name || d.original_title}
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {d.overview.slice(0, 300)}...
            <button className="text-zinc-500 ml-1">more</button>
            
          </p>
        </div>
      </Link>
    )) : <h1 className="text-3xl text-white mt-5 font-black text-center">Nothing to show</h1>}
  </div>
</div>

  );
};

export default HorizontalCard;
