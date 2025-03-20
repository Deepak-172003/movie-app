
import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from '../templets/Topnav';
import Dropdown from '../templets/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../templets/Cards';
import Loading from '../Loading';

const Tvshows = () => {
  const navigate = useNavigate();
  const [category,setCategory] = useState('airing_today')
  
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore,setMore] = useState(true)

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settv((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      }else{
        setMore(false)
        
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const refershHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setPage(1);
      settv([]);
      GetTv()
    }
  };

  useEffect(() => {
    // Getpopular();
    refershHandler()
  }, [category]);
  return tv.length > 0 ? (
    <div className=" w-screen min-h-screen bg-#1F1E24  "
    style={{ backgroundColor: "#1F1E24" }}
    >
      <div className=" px-[3%] w-full flex items-center justify-between  ">
        <h1 className="  text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] mr-2  ri-arrow-left-line"
          ></i>
          tv
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="category"
            options={["on_the_air", "popular","top_rated","airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
      className='bg-#1F1E24'
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvshows