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
        <div class="section relative">
          <form class="columns" @submit="onFilter">
            <div class="column is-2">
              <div class="field">
                <label>Filter by title</label>
                <input name="filter-by-title" class="input" type="text" v-model="filters.Title">
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by Year</label>
                <input name="filter-by-year" class="input" type="text" v-model="filters.Year">
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by director</label>
                <input name="filter-by-director" class="input" type="text" v-model="filters.Director">
              </div>
            </div>
            <div class="column is-2">
              <div class="field">
                <label>Filter by Genre</label>
                <br>
                <div class="select is-fullwidth">
                  <select name="filter-by-genre" v-model="filters.Genre">
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
                  <select name="filter-by-language" v-model="filters.Language">
                    <option disabled value="">Select one</option>
                    <option v-for="(language, i) in LANGUAGES" :key="i" :value="language.id">{{language.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <label>&nbsp;</label>
              <div class="field table remove-bg">
                <button name="filter" class="button is-primary" type="submit">Filter</button>
                &nbsp;<a class="has-text-grey underline table-cell align-bottom" v-on:click="clearFilter" v-if="isFilterApplied" data-cy="clear-filter">X Clear filter</a> 
              </div>
            </div>
          </form>
          <div class="absolute has-text-info" v-if="isFilterApplied && filteredMoives.length">
             Filter result: {{filteredMoives.length}} movie(s) found...
            </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="section">
        <div class="bricklayer columns">
          <p v-if="!filteredMoives.length">
            No movies found...
          </p>
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
      isFilterApplied: false,
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

        this.isFilterApplied = true;

        this.filteredMoives.splice(0, this.filteredMoives.length, ...newFilteredMovies);
        //this.bricklayerInit();
      } else {
        this.isFilterApplied = false;
        this.filteredMoives.splice(0, this.filteredMoives.length, ...this.movies);
        //this.bricklayerInit();
      }

      e.preventDefault();
    },
    clearFilter(e) {
      this.filters = {
        Title: '',
        Year: '',
        Genre: '',
        Director: '',
        Language: ''
      }
      this.isFilterApplied = false;
      this.filteredMoives.splice(0, this.filteredMoives.length, ...this.movies);
      e.preventDefault();
    }
  }
};
</script>
