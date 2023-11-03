import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import ReactModal from "react-modal";
import MovieList from "../components/MovieTrailer/MovieTrailer";
import MovieTrailer from "../components/MovieTrailer/MovieTrailer";

ReactModal.setAppElement("#__next");

const Home: NextPage = () => {
  const [movieId, setMovieId] = useState<string>("");

  const handleMovieSelection = (selectedMovieId: string) => {
    setMovieId(selectedMovieId);
  };

  return (
    <div style={{ backgroundColor: "#a7a4b9" }}>
      <Layout>
        <MovieList onMovieSelect={handleMovieSelection} />
        {movieId && <MovieTrailer movieId={movieId} />}
      </Layout>
    </div>
  );
};

export default Home;
