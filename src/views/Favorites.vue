<template>
  <div class="favorites-view">
    <h1 class="favorites-title">Mis favoritos</h1>
    <div v-if="favoritesMovies.length === 0" class="no-favorites">
      <p>No tienes películas favoritas aún.</p>
      <p>¡Explora y añade las que te gusten!</p>
    </div>
    <MovieList v-else :movies="favoritesMovies" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import MovieList from "@/components/MovieList.vue";

export default {
  name: "FavoritesView",
  components: {
    MovieList,
  },
  computed: {
    ...mapState("favorites", {
      favoritesMovies: (state) => state.movies,
    }),
  },
};
</script>
<style scoped>
.favorites-view {
  max-width: 1200px;
  margin: 0 auto;
}
.favorites-title {
  padding: 24px;
  font-size: 2rem;
}
.no-favorites {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: var(--color-text-secondary);
}
</style>
