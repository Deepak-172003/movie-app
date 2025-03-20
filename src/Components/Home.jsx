import React, { useEffect, useState } from "react";
import Sidenav from "./templets/Sidenav";
import Topnav from "./templets/Topnav";
import axios from "../utils/axios";
import Header from "./templets/Header";
import HorizontalCard from "./templets/HorizontalCard";
import Dropdown from "./templets/Dropdown";
import Loading from "./Loading"
const Home = () => {
  document.title = "Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      settrending(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />
        <div className=" p-5 flex justify-between">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
