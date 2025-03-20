
import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from '../templets/Topnav';
import Dropdown from '../templets/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../templets/Cards';
import Loading from '../Loading';

const People = () => {
  const navigate = useNavigate();
  const [category,setCategory] = useState('popular')
  
  const [people, setpeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore,setMore] = useState(true)

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      console.log(data)

      if (data.results.length > 0) {
        setpeople((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      }else{
        setMore(false)
        
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const refershHandler = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setpeople([]);
      GetPeople()
    }
  };

  useEffect(() => {
    // Getpopular();
    refershHandler()
  }, []);
  return people.length > 0 ? (
    <div className=" w-screen min-h-screen bg-#1F1E24  "
    style={{ backgroundColor: "#1F1E24" }}
    >
      <div className=" px-[3%] w-full flex items-center justify-between  ">
        <h1 className="  text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] mr-2  ri-arrow-left-line"
          ></i>
          people
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav />
          
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
      className='bg-#1F1E24'
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title={'person'}  />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People