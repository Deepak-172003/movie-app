import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removeperson } from "./store/reducers/personSlice";
import Loading from "./Loading";
import { asyncloadperson } from "./store/actions/personActions";
import HorizontalCard from "./templets/HorizontalCard";



const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen h-[180vh] flex flex-col bg-[#1F1E24] ">
      {/* part 1 navigation */}

      <nav className="h-[10vh] w-full text-zinc-100 p-5 flex items-center gap-10 text-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line "
        ></Link>
      </nav>
      <div className="w-full flex">
        {/* part 2 left poster and detail */}
        <div className="w-[20%]">
          <img
            className="h-[35vh] rounded  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-500 " />
          {/* social media links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* personal information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Person Info
          </h1>

          {/* Known for */}
          <h1 className="text-2xl text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-xl text-zinc-400 mb-2 ">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-2xl text-zinc-400 font-semibold ">Gender</h1>
          <h1 className="text-xl text-zinc-400 mb-2 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-2xl text-zinc-400 font-semibold">BirthDay</h1>
          <h1 className="text-xl text-zinc-400 mb-2 ">{info.detail.birthday}</h1>

          <h1 className="text-2xl text-zinc-400 font-semibold">DeathDay</h1>
          <h1 className="text-xl text-zinc-400 mb-2 ">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-2xl text-zinc-400 font-semibold">
            Place Of Birth
          </h1>
          <h1 className="text-xl text-zinc-400 mb-2 ">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="text-2xl text-zinc-400 font-semibold">
            Also known as{" "}
          </h1>
          <h1 className="text-xl text-zinc-400 mb-2 ">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* part 3 right details and information */}
        <div className="w-[80%] ml-[5%] ">
          <h1 className="text-6xl text-zinc-400  font-semibold my-5">
            {info.detail.name}
          </h1>

          {/* Known for */}
          
          <h1 className="text-xl text-zinc-400  ">
            Biography
          </h1>
          <p className="text-zinc-400 mt-3"> {info.detail.biography} </p>

          <h1 className="text-lg text-zinc-400  ">
              Known for
          </h1>
          <HorizontalCard data={info.combinedCredits.cast}  />
        </div>
      </div>

      {/* */}
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
