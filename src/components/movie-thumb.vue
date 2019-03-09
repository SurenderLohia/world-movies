<template>
  <div class="card mb3">
    <div class="card-image has-text-centered">
      <img
        class="thumb-image"
        :src="movie.Poster"
        :alt="movie.Title"
      >
    </div>
    <div class="card-content">
      <p class="is-size-5">{{movie.Title}}</p>
      <div class="mb1 h5 has-text-grey">
        <span>{{movie.Year}}</span>
        <span>&nbsp;- {{movie.Runtime}}</span>
        <span>&nbsp;- {{movie.Genre}}</span>
      </div>
      <p class="h5 mb1">{{movie.Plot}}</p>
      <p class="h5">Country:
        <span class="has-text-grey">{{movie.Country}}</span>
      </p>
      <p class="h5">Language:
        <span class="has-text-grey">{{movie.Language}}</span>
      </p>
      <p class="h5">Awards:
        <span class="has-text-grey">{{movie.Awards}}</span>
      </p>
    </div>
    <div class="card-footer h5">
      <span class="card-footer-item">Director:
        <span class="has-text-grey">{{movie.Director}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoiveThumb",
  props: ['movie']
};
</script>
