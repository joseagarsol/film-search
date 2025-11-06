const FAVORTES_STORAGE_KEY = "favoriteMovies";

const getFavoritesFromStorage = () => {
  const favorites = localStorage.getItem(FAVORTES_STORAGE_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoriteToStorage = (movies) => {
  localStorage.setItem(FAVORTES_STORAGE_KEY, JSON.stringify(movies));
};

const state = {
  movies: [],
};

const mutations = {
  SET_FAVORITES(state, movies) {
    state.movies = movies;
  },
  ADD_FAVORITE(state, movie) {
    state.movies.push(movie);
  },
  REMOVE_FAVORTITE(state, movieId) {
    state.movies = state.movies.filter((movie) => movie.id !== movieId);
  },
};

const actions = {
  loadFavorites({ commit }) {
    const movies = getFavoritesFromStorage();
    commit("SET_FAVORITES", movies);
  },
  addFavorite({ commit, state }, movie) {
    if (!state.movies.find((m) => m.id === movie.id)) {
      commit("ADD_FAVORITE", movie);
      saveFavoriteToStorage(state.movies);
    }
  },
  removeFavorite({ commit, state }, movieId) {
    commit("REMOVE_FAVORTITE", movieId);
    saveFavoriteToStorage(state.movies);
  },
};

const getters = {
  isFavorite: (state) => (movieId) => {
    return state.movies.some((movie) => movie.id === movieId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
