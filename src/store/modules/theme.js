const THEME_KEY = "vueMovieAppTheme";

const state = {
  isDarkMode: localStorage.getItem(THEME_KEY) === "dark",
};

const mutations = {
  SET_DARK_MODE(state, isDark) {
    state.isDarkMode = isDark;
  },
};

const actions = {
  toggleTheme({ commit, state }) {
    const newMode = !state.isDarkMode;
    commit("SET_DARK_MODE", newMode);

    localStorage.setItem(THEME_KEY, newMode ? "dark" : "light");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
