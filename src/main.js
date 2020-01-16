import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  {path: '../src/components/terrains-overview.vue', name:"terrainOverview"}
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
