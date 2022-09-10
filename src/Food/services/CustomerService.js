import axios from "axios";


class CustomerService {

    createCustomer(register){
        return axios.post("http://localhost:8080/customer/savecustomer",register);
    }

}
export default new CustomerService();