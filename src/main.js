import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(Vuex)

import buildingDetails from '../src/components/details/building-details.vue';
import terrainDetails from '../src/components/details/terrain-details.vue';
import newCampPlace from '../src/components/new-campplace/new-common.vue';
import search from '../src/components/search/search.vue';
import reviews from '../src/components/reviews.vue'

import apiService from '../src/Services/ApiServices';
import errorService from '../src/Services/ErrorService';
//import { store } from "../src/stores/store";

Vue.prototype.$http = apiService;
Vue.prototype.$error = errorService;
Vue.filter('formatDate', function(value){
  if (value){
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

const routes = [  
  {path: '/details/building', name:"buildingDetails", component: buildingDetails},
  {path: '/details/terrain', name:"terrainDetails", component: terrainDetails },
  {path: '/new', name:"new", component: newCampPlace},
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
    setCampPlace(state, campPlace){
      state.selectedCampPlace = campPlace;
    },
    clearNewCampPlace(state){
      state.newCampPlace = {place:{},person:{}}
    },
    setNewCampPlace(state, newCampPlace){
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
