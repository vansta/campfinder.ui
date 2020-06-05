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
    GetTerrainsOverview(){
        return ajax.get('terrain/all')
    },
    GetTerrainDetails(selectedRowId){
        return ajax.get('terrain',
        {params: {id: selectedRowId}} )
    },
    GetBuildingsOverview(){
        return ajax.get('building/all')
    },
    GetBuildingDetails(selectedRowId){
        return ajax.get('building',
        {params: {id: selectedRowId}} )
    },
    GetReviewsById(id){
        return ajax.get('reviews', 
        {params: {id: id}})
    },

    //POST
    PostNewBuilding(building){
        return ajax.post('building',
            building
        )
    },
    PostNewTerrain(terrain){
        return ajax.post('terrain',
            terrain
        )
    },
    PostTerrainSearch(terrainSearch){
        return ajax.post('terrain/search',
            terrainSearch
        )
    },
    PostBuildingSearch(buildingSearch){
        return ajax.post('building/search',
            buildingSearch
        )
    },
    PostNewReview(review){
        return ajax.post('reviews', 
            review
        )
    },

    //DELETE
    RemoveBuilding(id){
        return ajax.delete('building/delete', 
            {params: {id: id}})
    },
    RemoveTerrain(id){
        return ajax.delete('terrain/delete', 
            {params: {id: id}})
    }
}