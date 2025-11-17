<template>
  <div class="search-results-view">
    <h1 class="search-title">
      Resultados para: "<span>{{ $route.query.q }}</span
      >"
    </h1>
    <div v-if="isLoading" class="loading-spinner">Cargando resultados...</div>
    <div v-else-if="movies.length > 0">
      <MovieList :movies="movies" />
      <Pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        @page-changed="handlePageChange"
      />
    </div>
    <div v-else class="no-results">
      <p>No se encontraron resultados para "{{ $route.query.q }}"</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import MovieList from "@/components/MovieList.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "SearchResults",
  components: { MovieList, Pagination },
  computed: {
    ...mapState("search", {
      movies: (state) => state.results,
      isLoading: (state) => state.isLoading,
      currentPage: (state) => state.currentPage,
      totalPages: (state) => state.totalPages,
    }),
    query() {
      return this.$route.query.q;
    },
  },
  methods: {
    ...mapActions("search", ["performSearch", "clearResults"]),
    fetchResults() {
      if (this.query) {
        this.performSearch({ query: this.query });
      } else {
        this.clearResults();
      }
    },
    handlePageChange(page) {
      const query = this.$route.query.q;
      if (query) {
        this.performSearch({ query, page });
      }
    },
  },
  watch: {
    $route: "fetchResults",
  },
  mounted() {
    this.fetchResults();
  },
  beforeDestroy() {
    this.clearResults();
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
