import axios from "axios";


class FoodItemService{

    addNewFoodItem(register){
        return axios.post("http://localhost:8080/fooditem/savefooditem",register);
    }

    getAllFoof(){
        return axios.get("http://localhost:8080/fooditem/listfooditem");
    }

    getFoodById(id){
        return axios.get("http://localhost:8080/fooditem/findfooditem/"+id);
    }
}
export default new FoodItemService();