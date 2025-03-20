import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Pages/Trending";
import Popular from "./Components/Pages/Popular";
import Movies from "./Components/Pages/Movies";
import Tvshows from "./Components/Pages/Tvshows";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetails from "./Components/PersonDetails";
import People from "./Components/Pages/People";
import Trailer from "./Components/templets/Trailer";
import NotFound from "./Components/NotFound";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

const App = () => {
  return (
    <div className="bg-[#1F1E24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/movies/details/:id" element={<MovieDetails />}>
          <Route path="/movies/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
