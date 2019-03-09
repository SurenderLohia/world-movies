import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ],
});

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app');