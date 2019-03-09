<template>
  <div class="container">
    <div class="section">
      <div class="columns">
        <div class="column is-4" v-for="movie in movies" :key="movie.imdbID">
          <MovieThumb :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movies from '../data/movies.json';
import MovieThumb from '../components/movie-thumb.vue';
export default {
  name: "Home",
  components: {
    MovieThumb
  },
  data () {
    return {
      greeting: 'Hello',
      movies: movies
    }
  }
};
</script>
