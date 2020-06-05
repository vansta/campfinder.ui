export default{
    getError(error){
        if (error.response === undefined){
            return error;
        }
        else{
            return error.response.data;
        }
    }
}