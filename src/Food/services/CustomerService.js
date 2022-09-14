import axios from "axios";



class CustomerService {

    createCustomer(register){
        return axios.post("http://localhost:8080/customer/savecustomer",register);
    }

    // getCustomerByUsernameAndPassword(username,password){
    //     return axios.get("http://localhost:8080/customer/findbyusernameandpassword/"+username+"/"+password);
    // }

    getAllCustomer(){
        return axios.get("http://localhost:8080/customer/listcustomer");
    }

}
export default new CustomerService();