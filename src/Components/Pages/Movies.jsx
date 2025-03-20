import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from '../templets/Topnav';
import Dropdown from '../templets/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../templets/Cards';
import Loading from '../Loading';

const Movies = () => {

  const navigate = useNavigate();
  const [category,setCategory] = useState('now_playing')
  
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore,setMore] = useState(true)

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      console.log(data)
      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      }else{
        setMore(false)
        
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const refershHandler = () => {
    if (movies.length === 0) {
      GetMovies();
    } else {
      setPage(1);
      setMovies([]);
      GetMovies()
    }
  };

  useEffect(() => {
    // Getpopular();
    refershHandler()
  }, [category]);



  return movies.length > 0 ? (
    <div className=" w-screen min-h-screen bg-#1F1E24 "
    style={{ backgroundColor: "#1F1E24" }}
    >
      <div className=" px-[3%] w-full flex items-center justify-between  ">
        <h1 className="  text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] mr-2  ri-arrow-left-line"
          ></i>
          movies
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="category"
            options={["popular", "top_rated","upcoming","now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={GetMovies}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movies} title="movies" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movies