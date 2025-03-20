import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { removemovie } from "./store/reducers/movieSlice";
import Loading from "./Loading";
import { asyncloadmovie } from "./store/actions/movieActions";
import HorizontalCard from "./templets/HorizontalCard";

const MovieDetails = () => {
  const {pathname} =  useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div class="relative ">
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
          imdb
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
            <small className="text-xl p-3  fontbold text-zinc-300">
              {" "}
              {info.detail.release_date.split("-")[0]}{" "}
            </small>
          </h1>

          <div className="mt-3 mb-5  flex text-white items-center gap-x-5 ">
            <span className=" rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center ">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] text-2xl leading-6 font-semibold ">
              User Score
            </h1>
            <h1> {info.detail.release_date} </h1>
            <h1> {info.detail.genres.map((g) => g.name).join(",")} </h1>
            <h1>{info.detail.runtime} min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200" >{info.detail.tagline}</h1>

          <h1 className="text-2xl mb-3 mt-5 " >Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className="text-2xl mb-3 mt-5 " >Movies Translated</h1>
          <p className="mb-10">{info.translations.join(", ")}</p>

          <Link to={`${pathname}/trailer`} className="p-10 bg-[#6556CD] rounded-lg p-5" >
          <i className="text-xl mr-3 ri-play-fill"></i>
          Play Trailer</Link>


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

      {/* part 4 recommendations and similar stuff */}
      <hr className="mt-10 mb-5 border-none h-[1px] bg-zinc-500 " />
      <h1 className=" text-3xl font-bold text-white  ">Recommendations and Similar</h1>

      <HorizontalCard data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

        <Outlet/>
      
    </div>

    </div>
    
  ) : (
    <Loading />
  );
};

export default MovieDetails;
