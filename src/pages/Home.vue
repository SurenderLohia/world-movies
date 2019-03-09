<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">World Movies</h1>
        </div>
      </div>
    </section>
    <div class="hero is-light">
    
    <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column is-2">
            <div class="field">
              <label>Filter by title</label>
              <input class="input" type="text" />
            </div>
          </div>
          <div class="column is-2">
            <div class="field">
              <label>Filter by Year</label>
              <input class="input" type="text" />
            </div>
          </div>
          <div class="column is-2">
            <div class="field">
              <label>Filter by Genre</label>
              <br>
              <div class="select is-fullwidth">
                <select>
                  <option>option-1</option>
                  <option>option-1</option>
                </select>
              </div>
            </div>
          </div>
          <div class="column is-2">
            <div class="field">
              <label>Filter by director</label>
              <br>
              <div class="select is-fullwidth">
                <select>
                  <option>option-1</option>
                  <option>option-1</option>
                </select>
              </div>
            </div>
          </div>
          <div class="column is-2">
            <div class="field">
              <label>Filter by Language</label>
              <br>
              <div class="select is-fullwidth">
                <select>
                  <option>option-1</option>
                  <option>option-1</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column is-4" v-for="movie in movies" :key="movie.imdbID">
            <MovieThumb :movie="movie"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movies from "../data/movies.json";
import MovieThumb from "../components/movie-thumb.vue";
export default {
  name: "Home",
  components: {
    MovieThumb
  },
  data() {
    return {
      greeting: "Hello",
      movies: movies
    };
  }
};
</script>
