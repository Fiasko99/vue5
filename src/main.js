import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/main.vue'
import About from './components/about.vue'
import Item from './components/item.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: Main
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item
    },
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
