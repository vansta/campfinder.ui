import axios from '../../node_modules/axios';
import settings from '../settings/settings';

const ajax = axios.create({
    baseURL: settings.baseUrlApi
})

export default{
    GetTerrainsOverview(){
        return ajax.get(`${settings.baseUrlApi}/terrain`)
    },
    GetTerrainDetails(selectedRowId){
        return ajax.get(`${settings.baseUrlApi}/terrain`,
        {params: {id: selectedRowId}} )
    },
    GetBuildingsOverview(){
        return ajax.get(`${settings.baseUrlApi}/building`)
    },
    GetBuildingDetails(selectedRowId){
        return ajax.get(`${settings.baseUrlApi}/building`,
        {params: {id: selectedRowId}} )
    }
}