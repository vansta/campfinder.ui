import Vue from '../../src/stores/store';
import Vuex from '../../node_modules/vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        items: [],
        selectedCampPlace: {}
    },
    mutations:{
        setItems (state, setItems){
            state.items = setItems;
        },
        SetCampPlace(state, campPlace){
            state.selectedCampPlace = campPlace;
        }
    }
})