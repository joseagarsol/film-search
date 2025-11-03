<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
      class="movie-list-item"
    />
  </div>
</template>
<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
}
</style>
