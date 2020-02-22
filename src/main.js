import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.config.productionTip = false

import terrainOverview from '../src/components/terrains-overview.vue';
import buildingOverview from '../src/components/buildings-overview.vue';
import commonDetails from '../src/components/common-details.vue';
import buildingDetails from '../src/components/building-details.vue'
import terrainDetails from '../src/components/terrain-details.vue'

const routes = [
  {path: '/overview/terrain', name:"terrainOverview", component: terrainOverview},
  {path: '/overview/building', name:"buildingOverview", component: buildingOverview},
  {path: '/details', name:"commonDetails", component: commonDetails},
  {path: '/details/building', name:"buildingDetails", component: buildingDetails},
  {path: '/details/terrain', name:"terrainDetails", component: terrainDetails }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  Axios,
  render: h => h(App)
}).$mount('#app')
