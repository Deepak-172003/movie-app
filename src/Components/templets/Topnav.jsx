import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Noimage from '/NoImage.jpg'

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);

  console.log(searches);
  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%] ">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="w-[50%] mx-10 p-5 text-xl text-zinc-200 border-none bg-transparent outline-none"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}

      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto rounded left-[5%] ">

        {searches?.map((v, i) => (
          <Link to={`/${v.media_type}/details/${v.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center  border-b-2  border-zinc-100 "
          >
            <img
              className="w-[10vh] h-[10vh] rounded object-cover mr-5 "
              src={v.backdrop_path || v.profile_path ?  `https://image.tmdb.org/t/p/original/${
                v.backdrop_path || v.profile_path
              }` : Noimage}
              alt=""
            />
            <span>{v.original_title || v.name}</span>
          </Link>
        ))}
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center  border-b-2  border-zinc-100 ">
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
