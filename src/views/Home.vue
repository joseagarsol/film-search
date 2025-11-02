<template>
  <div class="home">
    <h1>Banco de pruebas de componentes</h1>
    <p>Así se ve el movieCard:</p>
    <div style="width: 300px; margin: 20px auto">
      <MovieCard :movie="mockMovie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
  },
  data() {
    return {
      mockMovie: {
        id: 615656,
        title: "Meg 2: The Trench",
        poster_path:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        vote_average: 6.9,
        overview: "Una fosa oceánica... (etc)",
      },
    };
  },
};
</script>
