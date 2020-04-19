import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(Vuex)

import commonDetails from '../src/components/details/common-details.vue';
import buildingDetails from '../src/components/details/building-details.vue';
import terrainDetails from '../src/components/details/terrain-details.vue';
import newCampPlace from '../src/components/new-campplace/new-common.vue';
import search from '../src/components/search/search.vue';
import reviews from '../src/components/reviews.vue'

import services from '../src/Services/ApiServices';
//import { store } from "../src/stores/store";

Vue.prototype.$http = services;
Vue.filter('formatDate', function(value){
  if (value){
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

const routes = [
  {path: '/details', name:"commonDetails", component: commonDetails},
  {path: '/details/building', name:"buildingDetails", component: buildingDetails},
  {path: '/details/terrain', name:"terrainDetails", component: terrainDetails },
  {path: '/new/terrain', name:"new", component: newCampPlace},
  //{path: '/search', name: 'search', component: search},
  {path: '/reviews', name: 'reviews', component: reviews},
  {path: '', name: 'search', component: search}
]

const store = new Vuex.Store({
  state:{
    searchModel:{},
    type: '',
    selectedCampPlace: {},
    newCampPlace:{
      place:{},
      person:{}
    }
  },
  mutations:{
    setType(state, type){
      state.type = type;
    },
    setSearchModel(state, newSearchModel){
      state.searchModel = newSearchModel;
    },
    SetCampPlace(state, campPlace){
        state.selectedCampPlace = campPlace;
    },
    ClearNewCampPlace(state){
      state.newCampPlace = {place:{},person:{}}
    },
    SetNewCampPlace(state, newCampPlace){
      state.newCampPlace = newCampPlace;
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
