import axios from "axios";

class RestaurantService{

    createRestaurant(register){
        return axios.post("http://localhost:8080/restraunt/savesrestraunt",register);
    }

    getAllOwner(){
        return axios.get("http://localhost:8080/restraunt/listsrestraunt");
    }

}
export default new RestaurantService();