import api from "@/services/api";

const state = {
  results: [],
  isLoading: false,
  currentQuery: "",
  totalPages: 0,
  currentPage: 1,
};

const mutations = {
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
  SET_SEARCH_RESULTS(state, { results, totalPages, page, query }) {
    state.results = results;
    state.totalPages = totalPages;
    state.currentPage = page;
    state.currentQuery = query;
  },
  CLEAR_SEARCH_RESULTS(state) {
    state.results = [];
    state.totalPages = 0;
    state.currentPage = 1;
    state.currentQuery = "";
  },
};

const actions = {
  async performSearch({ commit }, { query, page = 1 }) {
    if (!query || query.trim() === "") {
      commit("CLEAR_SEARCH_RESULTS");
      return;
    }
    commit("SET_LOADING", true);
    try {
      const response = await api.searchMovies(query, page);
      commit("SET_SEARCH_RESULTS", {
        results: response.data.results,
        totalPages: response.data.total_pages,
        page: response.data.page,
        query: query,
      });
    } catch (error) {
      console.error("Error al realizar la búsqueda: ", error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  clearSearch({ commit }) {
    commit("CLEAR_SEARCH_RESULTS");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
