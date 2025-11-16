<template>
  <div class="search-results-view">
    <h1 class="search-title">
      Resultados para: "<span>{{ $route.query.q }}</span
      >"
    </h1>
    <div v-if="isLoading" class="loading-spinner">Cargando resultados...</div>
    <div v-else-if="movies.length > 0"><MovieList :movies="movies" /></div>
    <div v-else class="no-results">
      <p>No se encontraron resultados para "{{ $route.query.q }}"</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import MovieList from "@/components/MovieList.vue";

export default {
  name: "SearchResults",
  components: { MovieList },
  computed: {
    ...mapState("search", {
      movies: (state) => state.results,
      isLoading: (state) => state.isLoading,
    }),
  },
  methods: {
    ...mapActions("search", ["performSearch", "clearResults"]),
    fetchResults() {
      const query = this.$route.query.q;
      if (query) {
        this.performSearch({ query });
      } else {
        this.clearResults();
      }
    },
  },
  watch: {
    $route: "fetchResults",
  },
  mounted() {
    this.fetchResults();
  },
};
</script>
<style scoped>
.search-results-view {
  max-width: 1200px;
  margin: 0 auto;
}

.search-title {
  font-size: 2rem;
  padding: 24px;
}
</style>
