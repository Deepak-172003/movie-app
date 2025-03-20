import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../templets/Dropdown";
import Topnav from "../templets/Topnav";
import axios from "../../utils/axios";
import Cards from "../templets/Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore,setMore] = useState(true)

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      }else{
        setMore(false)
        
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const refershHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(1);
      setTrending([]);
      GetTrending()
    }
  };

  useEffect(() => {
    // GetTrending();
    refershHandler()
  }, [category, duration]);

  return trending.length > 0 ? (
    <>
    
    <div className=" w-screen min-h-screen  bg-#1F1E24  "
    style={{ backgroundColor: "#1F1E24" }}
    >
      <div className=" px-[3%] w-full  flex items-center justify-between  ">
        <h1 className="  text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"
          ></i>
          Trending
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <div>
        
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
    </>
  ) : (
    <Loading />
  );
};

export default Trending;
