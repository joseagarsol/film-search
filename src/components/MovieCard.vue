<template>
  <router-link
    :to="{ name: 'MovieDetail', params: { id: movie.id } }"
    class="movie-card-link"
  >
    <div class="movie-card">
      <img
        :src="movie.poster_path | posterUrl('w342')"
        :alt="movie.title + ' poster'"
        class="movie-card-poster"
      />
      <div class="movie-card-content">
        <h3 class="movie-card-title">{{ movie.title }}</h3>
        <span class="movie-card-rating">
          ⭐️ {{ movie.vote_average.toFixed(1) }}
        </span>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.movie-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.movie-card-content {
  padding: 16px;
}

.movie-card-poster {
  width: 100%;
  height: auto;
  display: block;
}

.movie-card-title {
  font-size: 1.1rem;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-card-rating {
  font-weight: bold;
  color: #f5c518;
}

.movie-card-link {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;
  display: block;
}

.movie-card-link:hover {
  transform: scale(1.05);
}
</style>
