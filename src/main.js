import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)

import terrainOverview from '../src/components/terrains-overview.vue';
import buildingOverview from '../src/components/buildings-overview.vue';
import commonDetails from '../src/components/common-details.vue';
import buildingDetails from '../src/components/building-details.vue';
import terrainDetails from '../src/components/terrain-details.vue';
import newTerrain from '../src/components/new-campplace/new-common.vue';
import search from '../src/components/search/search.vue';

import services from '../src/Services/ApiServices';
//import { store } from "../src/stores/store";

Vue.prototype.$http = services;

const routes = [
  {path: '/overview/terrain', name:"terrainOverview", component: terrainOverview},
  {path: '/overview/building', name:"buildingOverview", component: buildingOverview},
  {path: '/details', name:"commonDetails", component: commonDetails},
  {path: '/details/building', name:"buildingDetails", component: buildingDetails},
  {path: '/details/terrain', name:"terrainDetails", component: terrainDetails },
  {path: '/new/terrain', name:"newTerrain", component: newTerrain},
  {path: '/search', name: 'search', component: search}
]

const store = new Vuex.Store({
  state:{
    items: [],
    searchModel:{}
  },
  mutations:{
    setItems(state, setItems){
      state.items = setItems;
    }
  }
})

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  Axios,
  store,
  render: h => h(App)
}).$mount('#app')
