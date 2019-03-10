<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey has-text-centered">Login</h3>
          <p class="subtitle has-text-grey has-text-centered">Please login to proceed.</p>

          <div class="card">
            <form class="card-content" @submit="onSubmit" novalidate="true">
              <div class="field">
                <label>Username</label>
                <input class="input" type="text" autofocus v-model="username" autocomplete>
                <div class="has-text-danger h5" v-if="error.username">{{ error.username }}</div>
              </div>
              <div class="field">
                <label>Password</label>
                <input class="input" type="password" v-model="password" autocomplete>
                <div class="has-text-danger h5" v-if="error.password">{{ error.password }}</div>
                <div class="has-text-danger h5" v-if="error.genericError">{{ error.genericError }}</div>
              </div>
              <div class="field">
                <button type="submit" class="button is-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { USER } from "../constants";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: {}
    };
  },
  beforeCreate: function() {
    if(this.$parent.isAuthenticated) {
      this.$router.push({ path: '/home' });
    }
  },
  methods: {
    onSubmit(e) {
      this.error = {};
      if (!this.username) {
        this.error.username = "Please enter the Username";
      }
      if (!this.password) {
        this.error.password = "Please enter the Password";
      }

      if (this.username && this.password) {
        if (this.username === USER.NAME && this.password === USER.PASSWORD) {
          this.$parent.isAuthenticated = true;
          this.$router.push({ path: 'home' });
        } else {
          this.error.genericError = "Username or Password is invalid";
        }
      }

      e.preventDefault();
    }
  }
};
</script>
