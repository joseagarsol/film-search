<template>
  <div class="home">
    <h1 class="home-title">Películas populares</h1>
    <div v-if="isLoading" class="loading-spinner">Cargando...</div>
    <MovieList v-else :movies="popularMovies" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import api from "@/services/api.js";

export default {
  name: "HomeView",
  components: {
    MovieList,
  },
  data() {
    return {
      popularMovies: [],
      isLoading: false,
    };
  },
  async mounted() {
    try {
      const response = await api.getPopularMovies();
      this.popularMovies = response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.home-title {
  padding: 24px;
  font-size: 2rem;
}

.loading-spinner {
  padding: 5px 24px;
}
</style>
