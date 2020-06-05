import axios from '../../node_modules/axios';
import settings from '../settings/settings';

// var config = {
//     headers: {'Acces-Control-Allow-Origin': '*'}
// }

const ajax = axios.create({
    baseURL: settings.baseUrlApi
})

export default{
    //GET
    getTerrainsOverview(){
        return ajax.get('terrain/all')
    },
    getTerrainDetails(selectedRowId){
        return ajax.get('terrain',
        {params: {id: selectedRowId}} )
    },
    getBuildingsOverview(){
        return ajax.get('building/all')
    },
    getBuildingDetails(selectedRowId){
        return ajax.get('building',
        {params: {id: selectedRowId}} )
    },
    getReviewsById(id){
        return ajax.get('reviews', 
        {params: {id: id}})
    },

    //POST
    postNewBuilding(building){
        return ajax.post('building',
            building
        )
    },
    postNewTerrain(terrain){
        return ajax.post('terrain',
            terrain
        )
    },
    postTerrainSearch(terrainSearch){
        return ajax.post('terrain/search',
            terrainSearch
        )
    },
    postBuildingSearch(buildingSearch){
        return ajax.post('building/search',
            buildingSearch
        )
    },
    postNewReview(review){
        return ajax.post('reviews', 
            review
        )
    },

    //DELETE
    removeBuilding(id){
        return ajax.delete('building/delete', 
            {params: {id: id}})
    },
    removeTerrain(id){
        return ajax.delete('terrain/delete', 
            {params: {id: id}})
    }
}