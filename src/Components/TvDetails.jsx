import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removetv } from "./store/reducers/tvSlice";
import Loading from "./Loading";
import HorizontalCard from "./templets/HorizontalCard";
import { asyncloadtv } from "./store/actions/tvActions";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div className="relative ">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="w-screen min-h-screen px-[10%] py-5 "
      >
        {/* part 1 navigation */}
        <nav className="w-full text-zinc-100 p-5 flex items-center gap-10 text-xl ">
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line "
          ></Link>
          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            IMDb
          </a>
        </nav>

        {/* part 2 poster and details */}

        <div className=" w-full flex    ">
          <img
            className="h-[50vh] rounded  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />

          <div className="content ml-[5%] text-white ">
            <h1 className="text-5xl font-black text-white flex items-center">
              {" "}
              {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title}
              <small className="text-xl fontbold text-zinc-300">
                {" "}
                {info.detail.first_air_date.split("-")[0]}{" "}
              </small>
            </h1>

            <div className="mt-3 mb-5  flex text-white items-center gap-x-5 ">
              <span className=" rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center ">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
              <h1 className="w-[60px] text-2xl leading-6 font-semibold ">
                User Score
              </h1>
              <h1> {info.detail.first_air_date} </h1>
              <h1> {info.detail.genres.map((g) => g.name).join(",")} </h1>
              <h1>{info.detail.runtime}min</h1>
            </div>

            <h1 className="text-xl font-semibold italic text-zinc-200">
              {info.detail.tagline}
            </h1>

            <h1 className="text-2xl mb-3 mt-5 ">Overview</h1>
            <p>{info.detail.overview}</p>

            <h1 className="text-2xl mb-3 mt-5 ">tvs Translated</h1>
            <p className="mb-10">{info.translations.join(", ")}</p>

            <Link
              to={`${pathname}/trailer`}
              className="p-10 bg-[#6556CD] rounded-lg p-5 "
            >
              <i className="text-xl mr-3 ri-play-fill cursor-pointer"></i>
              Play Trailer
            </Link>
          </div>
        </div>

        {/* part 3 */}

        <div className="w-[80%] flex flex-col gap-y-5 mt-10  ">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white ">
              <h1>Available on Platform</h1>
              {info.watchproviders.flatrate.map((w) => (
                <img
                  className="w-[5vh] h-[5vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white ">
              <h1>Available on Rent</h1>
              {info.watchproviders.rent.map((w) => (
                <img
                  className="w-[5vh] h-[5vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white ">
              <h1>Available on Buy</h1>
              {info.watchproviders.buy.map((w) => (
                <img
                  className="w-[5vh] h-[5vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>

        {/* part 4 seasons */}
        <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-500 " />
        <h1 className=" text-3xl font-bold text-white  ">
          Recommendations and seasons
        </h1>
        <div className="w-[100%] flex overflow-y-hidden mr-2 mb-5 p-5 gap-x-10">
          {info.detail.seasons.length > 0 ? (
            info.detail.seasons.map((s, i) => (
              <div className="min-w-[24vh]  ">
                <img
                  className="h-[30vh] rounded w-full  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
                  src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                  alt=""
                />

                <h1 className="text-2xl text-zinc-400 mt-3 font-semibold">
                  {info.detail.name ||
                    s.title ||
                    s.original_name ||
                    s.original_title}
                </h1>
              </div>
            ))
          ) : (
            <h1 className="text-3xl mt-5 text-white font-black text-center">
              Nothing to show
            </h1>
          )}
        </div>

        {/* part 5 recommendations and similar stuff */}
        <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-500 " />
        <h1 className=" text-3xl font-bold text-white  ">
          Recommendations and Similar
        </h1>

        <HorizontalCard
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />

        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
