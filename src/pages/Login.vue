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
                <input name="username" class="input" type="text" autofocus v-model="username" autocomplete>
                <div class="has-text-danger h5" v-if="error.username" data-cy="username-error">{{ error.username }}</div>
              </div>
              <div class="field">
                <label>Password</label>
                <input name="password" class="input" type="password" v-model="password" autocomplete>
                <div class="has-text-danger h5" v-if="error.password" data-cy="password-error">{{ error.password }}</div>
                <div class="has-text-danger h5" v-if="error.generic" data-cy="invalid-credentials-error">{{ error.generic }}</div>
              </div>
              <div class="field">
                <button type="submit" class="button is-primary" data-cy="submit">Login</button>
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
        this.error.username = "Please enter the username";
      }
      if (!this.password) {
        this.error.password = "Please enter the password";
      }

      if (this.username && this.password) {
        if (this.username === USER.NAME && this.password === USER.PASSWORD) {
          this.$parent.isAuthenticated = true;
          window.sessionStorage.setItem('isLoggedIn', true);
          this.$router.push({ path: 'home' });
        } else {
          this.error.generic = "Username or password is invalid";
        }
      }

      e.preventDefault();
    }
  }
};
</script>
