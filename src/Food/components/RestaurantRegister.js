import React, { Component } from 'react'

class RestaurantRegister extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>

                            <div className="name" style={{marginTop:'30px'}}>
                                <input type="text" placeholder="First name" style={{width:'33%'}} name="customerFirstName" value={this.state.customerFirstName} onChange={this.changeCustomerFirstName}/>
                                <input type="text" placeholder="Middle name" style={{width:'27%',margin:' 0 12px'}} name="customerMiddleName" value={this.state.customerMiddleName} onChange={this.changeCustomerMiddleName}/>
                                <input type="text" placeholder="Last name" style={{width:'33%'}} name="customerLastName" value={this.state.customerLastName} onChange={this.changeCustomerLastName}/>
                            </div>
                            <div className="name">
                                <input type="date" placeholder="Date of Birth" style={{width:'33%'}} name="customerDateOfBirth" value={this.state.customerDateOfBirth}  onChange={this.changeCustomerDateOfBirth}/>
                                <input type="number" placeholder="Age" style={{width:'27%',margin: '0 12px'}} name="customerAge" value={this.state.customerAge}  onChange={this.changeCustomerAge}/>
                                <input type="text" placeholder="Gender" style={{width:'33%'}} name="customerGender" value={this.state.customerGender} onChange={this.changeCustomerGender}/>
                            </div>
                            <div className="try">
                                <input type="email" placeholder="Email" style={{width:'45%'}} name="customerEmail" value={this.state.customerEmail} onChange={this.changeCustomerEmail}/>
                                <input type="number" placeholder="phone number" style={{width:'45%',marginLeft: '30px'}} name="customerPhoneNumber" value={this.state.customerPhoneNumber} onChange={this.changeCustomerPhoneNumber}/>
                            </div>
                            <h3 style={{margin: '0'}}>Address:</h3>
                            <div style={{display:'flex',justifyContent:'space-between'}} >
                                <input type="text" placeholder="House number" style={{width:'45%'}} name="customerHouseNumber" value={this.state.customerHouseNumber} onChange={this.changeCustomerHouseNumber}/>
                                <input type="text" placeholder="street name" style={{width:'45%',marginLeft:'30px'}} name="customerStreet" value={this.state.customerStreet}  onChange={this.changeCustomerStreet}/>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <input type="text" placeholder="city name" style={{width:'45%'}}  name="customerCity" value={this.state.customerCity}  onChange={this.changeCustomerCity}/>
                                <input type="text" placeholder="country name" style={{width:'45%',marginLeft:'30px'}} name="customerCountry" value={this.state.customerCountry}  onChange={this.changeCustomerCountry}/>
                            </div>
                            <h3 style={{margin: '0'}}>Login Credentials:</h3>
                            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
                                <input type="text" placeholder="username" style={{width:'45%'}} name="username" value={this.state.username}  onChange={this.changeUsername}/>
                                <input type="password" placeholder="Password" style={{width:'45%',marginLeft:'30px'}} name="password" value={this.state.password}  onChange={this.changePassword}/>
                            </div>
                            <button onClick={this.registerCustomer}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default RestaurantRegister;