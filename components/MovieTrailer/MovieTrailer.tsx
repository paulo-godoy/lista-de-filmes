import React, { useEffect, useState } from "react";
import { getPopularMovies, getMovieTrailer } from "../../api/tmdb";
import ReactModal from "react-modal";
import MovieTrailer from "./MovieTrailer";
import {
  LoadMoreButton,
  MovieImage,
  MovieItem,
  MovieListContainer,
  MovieTitle,
  customModalStyles,
} from "./MovieTrailer.styled";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page: number) => {
    try {
      const popularMovies = await getPopularMovies(page);
      setMovies([...movies, ...popularMovies]);
    } catch (error) {
      console.error("Erro ao buscar filmes populares", error);
    }
  };

  const handleMovieClick = async (movieId: string) => {
    setSelectedMovie(movieId);
    try {
      const trailer = await getMovieTrailer(movieId);
      setVideoId(trailer);
    } catch (error) {
      console.error("Erro ao buscar o trailer do filme", error);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <MovieListContainer>
        {movies.map((movie: any) => (
          <MovieItem key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieItem>
        ))}
      </MovieListContainer>
      <LoadMoreButton onClick={handleLoadMore}>Carregar mais</LoadMoreButton>
      <ReactModal
        isOpen={!!videoId}
        onRequestClose={() => setVideoId(null)}
        style={customModalStyles}
      >
        {videoId ? (
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Trailer"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>Trailer não encontrado</p>
        )}
      </ReactModal>
    </div>
  );
};

export default MovieList;
