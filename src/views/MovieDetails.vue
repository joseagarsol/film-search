<template>
  <div class="movie-details-view">
    <div v-if="isLoading" class="loading-spinner">Cargando...</div>
    <div v-if="movie" class="movie-container">
      <div class="movie-backdrop" :style="{ backgroundImage: backdropStyle }">
        <div class="backdrop-overlay"></div>
      </div>
      <div class="movie-content">
        <div class="movie-poster">
          <img
            :src="movie.poster_path | posterUrl('w500')"
            :alt="movie.title"
          />
        </div>
        <div class="movie-info">
          <h1>{{ movie.title }}</h1>
          <p class="tagline">
            <em>{{ movie.tagline }}</em>
          </p>

          <div class="metadata">
            <span>{{ movie.vote_average.toFixed(1) }}</span>
            <span>|</span>
            <span>{{ movie.release_date | yearOnly }}</span>
            <span>|</span>
            <span>{{ movie.runtime }} min</span>
          </div>

          <h3>Sinopsis</h3>
          <p>{{ movie.overview }}</p>

          <button class="favorite-btn" @click="toggleFavorite">
            <span v-if="isMovieFavorite"> ♥️ Quitar de favoritos</span>
            <span v-else> 🤍 Añadir a favoritos </span>
          </button>
        </div>
      </div>

      <div class="movie-cast">
        <h2>Reparto Principal</h2>
        <div class="cast-list">
          <div v-for="actor in cast" :key="actor.id" class="cast-member">
            <img
              :src="actor.profile_path | posterUrl('w185')"
              :alt="actor.name"
            />
            <strong>{{ actor.name }}</strong>
            <p>{{ actor.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MovieDetails",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      movie: null,
    };
  },
  computed: {
    backdropStyle() {
      if (this.movie && this.movie.backdrop_path) {
        const url = this.$options.filters.posterUrl(
          this.movie.backdrop_path,
          "w1280"
        );
        return `url(${url})`;
      }
      return "none";
    },
    cast() {
      if (this.movie && this.movie.credits && this.movie.credits.cast) {
        return this.movie.credits.cast.slice(0, 10);
      }
      return [];
    },
    ...mapGetters("favorites", ["isFavorite"]),
    isMovieFavorite() {
      return this.movie ? this.isFavorite(this.movie.id) : false;
    },
  },
  methods: {
    ...mapActions("favorites", ["addFavorite", "removeFavorite"]),

    toggleFavorite() {
      if (!this.movie) return;
      if (this.isMovieFavorite) {
        this.removeFavorite(this.movie.id);
      } else {
        this.addFavorite(this.movie);
      }
    },
  },
  async mounted() {
    const movieId = this.id;
    try {
      const response = await api.getMovieDetails(movieId);
      this.movie = response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      this.isLoading = false;
    }
  },
  filters: {
    yearOnly(value) {
      if (!value) return "";
      return value.split("-")[0];
    },
  },
};
</script>
<style scoped>
.movie-container {
  max-width: 1200px;
  margin: 0 auto;
  color: var(--color-text-primary);
}

.movie-backdrop {
  height: 500px;
  background-size: cover;
  background-position: center top;
  position: relative;
}

.backdrop-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    var(--color-background-primary) 10%,
    transparent 90%
  );
}

.movie-content {
  display: flex;
  padding: 0 24px;
  margin-top: -150px;
  position: relative;
}

.movie-poster img {
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.movie-info {
  padding: 0 24px;
}

.movie-info h1 {
  font-family: var(--font-display);
  font-size: 3rem;
}

.tagline {
  font-style: italic;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.metadata {
  display: flex;
  gap: 10px;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.favorite-btn {
  background-color: var(--color-accent);
  color: #000;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
}

.movie-cast {
  padding: 24px;
  margin-top: 40px;
}

.cast-list {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.cast-member {
  text-align: center;
  width: 150px;
}

.cast-member img {
  height: 225px;
  object-fit: cover;
  border-radius: 8px;
  background-color: var(--color-background-secondary);
}

.cast-member p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .movie-content {
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
  }

  .movie-poster img {
    width: 250px;
    margin-bottom: 24px;
  }

  .movie-info {
    padding: 0;
    text-align: center;
  }

  .movie-info h1 {
    font-size: 2.2rem;
  }

  .tagline {
    margin-bottom: 16px;
  }

  .metadata {
    justify-content: center;
  }

  .movie-backdrop {
    height: 350px;
  }

  .movie-cast {
    padding: 16px;
    margin-top: 20px;
  }
}
</style>
