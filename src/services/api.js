import axios from "axios";

const API_KEY = process.env.VUE_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
    language: "es-ES",
  };
  return config;
});

export default {
  getPopuarMovies() {
    return apiClient.get("/movie/popular");
  },

  getMovieDetails(movieId) {
    return apiClient.get(`/movie/${movieId}`);
  },

  searchMovies(query, page = 1) {
    return apiClient.get("/search/movie", {
      params: {
        query,
        page,
      },
    });
  },
};
