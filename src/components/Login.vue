<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey has-text-centered">Login</h3>
            <p class="subtitle has-text-grey has-text-centered">Please login to proceed.</p>
            
            <div class="card">
              <div class="card-content">
                <div class="field">
                  <label>Username</label>
                  <input class="input" type="text" autofocus />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input class="input" type="password" />
                </div>
                <div class="field">
                  <button class="button is-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login"
};
</script>
