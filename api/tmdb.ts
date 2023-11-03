import axios from "axios";

const API_KEY = "Coloque aui sua chave de API do TMDB"; // Coloque sua chave de API do TMDB aqui
const BASE_URL = "https://api.themoviedb.org/3";

// Função para buscar filmes populares
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Erro ao buscar filmes populares");
  }
};

// Função para buscar detalhes de um filme por ID
export const getMovieDetails = async (movieId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar detalhes do filme");
  }
};

// Função para buscar o vídeo do trailer de um filme por ID
export const getMovieTrailer = async (movieId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });

    const trailer = response.data.results.find(
      (result: { type: string }) => result.type === "Trailer"
    );

    return trailer ? trailer.key : null;
  } catch (error) {
    throw new Error("Erro ao buscar o trailer do filme");
  }
};
