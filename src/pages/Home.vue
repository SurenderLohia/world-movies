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
          <form class="columns" @submit="onFilter">
            <div class="column is-2">
              <div class="field">
                <label>Filter by title</label>
                <input class="input" type="text" v-model="filters.Title">
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by Year</label>
                <input class="input" type="text" v-model="filters.Year">
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by director</label>
                <input class="input" type="text" v-model="filters.Director">
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by Genre</label>
                <br>
                <div class="select is-fullwidth">
                  <select v-model="filters.Genre">
                    <option disabled value="">Select one</option>
                    <option v-for="(genre, i) in GENRES" :key="i" :value="genre.id">{{genre.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by Language</label>
                <br>
                <div class="select is-fullwidth">
                  <select v-model="filters.Language">
                    <option disabled value="">Select one</option>
                    <option v-for="(language, i) in LANGUAGES" :key="i" :value="language.id">{{language.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <label>&nbsp;</label>
              <div class="field">
                <button class="button is-primary" type="submit">Filter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="section">
        <div class="bricklayer columns">
          <div class="column is-4" v-for="(movie, i) in filteredMoives" :key="i">
            <MovieThumb :movie="movie"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/libs/bricklayer/bricklayer.css"></style>

<script>
import movies from "../data/movies.json";
import MovieThumb from "../components/movie-thumb.vue";
import { GENRES, LANGUAGES, CONTAIN_SEARCH } from '../constants';

export default {
  name: "Home",
  components: {
    MovieThumb
  },
  data() {
    return {
      movies: movies,
      filteredMoives: movies.slice(),
      GENRES: GENRES,
      LANGUAGES: LANGUAGES,
      filters: {
        Title: '',
        Year: '',
        Genre: '',
        Director: '',
        Language: ''
      },
      bricklayer: null
    };
  },
  beforeCreate: function() {
    if(!this.$parent.isAuthenticated) {
      this.$router.push({ path: '/' });
    }
  },
  mounted: function() {
    this.$nextTick(function() {
        if(this.$parent.isAuthenticated && this.movies.length) {
          //this.bricklayer = new window.Bricklayer(document.querySelector(".bricklayer"));
        }
      });
  },
  methods: {
    bricklayerInit() {
      if(this.bricklayer) {
        this.bricklayer.destroy();
      }
      this.bricklayer = new window.Bricklayer(document.querySelector(".bricklayer"));
    },
    onFilter(e) {
      let validFilters = {};

      for(let key in this.filters) {
        if(this.filters[key]) {
          validFilters[key] = this.filters[key];
        }
      }

      let newFilteredMovies = [];

      if(Object.keys(validFilters).length) {
        newFilteredMovies = this.movies.filter(item => {
          for(let key in validFilters) {
            let isContainSearch = CONTAIN_SEARCH.includes(key);

            if(isContainSearch) {
              if(!item[key] || !item[key].toLowerCase().includes(validFilters[key].toLowerCase())) {
                return false;
              }
            } else if((!item[key] || item[key].toLowerCase() != validFilters[key].toLowerCase())) {
              return false;
            }
          }
          return true;
        });

        this.filteredMoives.splice(0, this.filteredMoives.length, ...newFilteredMovies);
        //this.bricklayerInit();
      } else {
        this.filteredMoives.splice(0, this.filteredMoives.length, ...this.movies);
        //this.bricklayerInit();
      }

      e.preventDefault();
    }
  }
};
</script>
