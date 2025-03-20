import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white px-5 py-10">
      <h1 className="text-5xl font-bold mb-5 text-[#6556CD]">🎬 About CineScope</h1>
      <p className="text-lg mb-8 text-zinc-300 leading-relaxed">
        <strong>Movie App</strong> is your all-in-one platform for exploring the world of movies and TV shows.
        Designed for cinephiles and casual viewers alike, CineScope offers an immersive experience where you can:
      </p>

      <ul className="space-y-5 text-zinc-200">
        <li>
          <span className="text-[#6556CD]">✨ Discover:</span> Get detailed information on the latest movies, trending TV shows, and timeless classics.
        </li>
        <li>
          <span className="text-[#6556CD]">🔍 Search & Filter:</span> Effortlessly search titles using keywords or filters like release date, genre, or ratings.
        </li>

          
        <li>
          <span className="text-[#6556CD]">🎥 Watch Trailers:</span> View official trailers directly within the app to decide what to watch next.
        </li>
        <li>
          <span className="text-[#6556CD]">🧠 Personalized Recommendations:</span> Get tailored suggestions based on similar movies and TV shows you already like.
        </li>
        <li>
          <span className="text-[#6556CD]">🌍 Global Access:</span> Access multilingual translations and metadata from around the world.
        </li>
        <li>
          <span className="text-[#6556CD]">🚀 Powered by TMDB API:</span> CineScope fetches live data from the reliable and community-powered{" "}
          <a
            href="https://www.themoviedb.org/documentation/api"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-600"
          >
            TMDB API
          </a>.
        </li>
      </ul>

      <p className="mt-10 text-lg text-zinc-300 mb-10 ">
        Whether you’re looking for a deep-dive into your favorite series, scouting new releases, or just curious about
        what’s trending globally — <strong>CineScope</strong> makes it simple, fast, and visually stunning.
        
      </p>

      <Link
          to="/"
          className="bg-[#6556CD] hover:bg-[#5144b3]  transition-colors  px-6 py-3 rounded-full text-white font-semibold"
        >
          Go Back Home
        </Link>
      
      
    </div>
  );
};

export default About;
