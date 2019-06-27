import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Dropdown from 'bp-vuejs-dropdown'
import Welcome from './components/Welcome.vue'

// Vue.use(Dropdown)
Vue.use(VueRouter)
const routes = [
  { path : '/' , component : Welcome}
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
