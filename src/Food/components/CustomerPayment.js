import React, { Component } from 'react'
import './CustomerPayment.css'
import CustomerService from '../services/CustomerService'


class CustomerPayment extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='wholeBody3'>
                <div className="container3" id="container3">
                    <div className="form-container3 sign-up-container3">
                        <form action="#">
                            <h1>Make Payment</h1>
                            <button onClick={this.registerRestaurant}>Pay</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default CustomerPayment;