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
        return ajax.get(`${settings.baseUrlApi}/terrain/all`)
    },
    GetTerrainDetails(selectedRowId){
        return ajax.get(`${settings.baseUrlApi}/terrain`,
        {params: {id: selectedRowId}} )
    },
    GetBuildingsOverview(){
        return ajax.get(`${settings.baseUrlApi}/building/all`)
    },
    GetBuildingDetails(selectedRowId){
        return ajax.get(`${settings.baseUrlApi}/building`,
        {params: {id: selectedRowId}} )
    },

    //POST
    PostNewBuilding(building){
        return ajax.post(`${settings.baseUrlApi}/building`,
            building
        )
    },
    PostNewTerrain(terrain){
        return ajax.post(`${settings.baseUrlApi}/terrain`,
            terrain
        )
    },
    PostTerrainSearch(terrainSearch){
        return ajax.post(`${settings.baseUrlApi}/terrain/search`,
            terrainSearch
        )
    },
    PostBuildingSearch(buildingSearch){
        return ajax.post(`${settings.baseUrlApi}/building/search`,
            buildingSearch
        )
    }
}