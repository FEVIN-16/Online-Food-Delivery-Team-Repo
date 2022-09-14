import React, { Component } from 'react'
import './OwnerLogin.css'
import RestaurantService from '../services/RestaurantService'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

class OwnerLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            Owner: [],
            username: '',
            password: '',
            own: '',
            restruantId:'',
        }
        
        this.changeOwnerUsername=this.changeOwnerUsername.bind(this);
        this.changeOwnerPassword=this.changeOwnerPassword.bind(this);
        this.validateOwner=this.validateOwner.bind(this);
    }

    changeOwnerUsername= (event) => {
        this.setState({ username: event.target.value })
    }

    changeOwnerPassword= (event) => {
        this.setState({ password: event.target.value })
    }


    validateOwner= (e) => {
        e.preventDefault()
        let find=0;
        for (let i = 0; i < this.state.own.length; i++){
            if ((this.state.username === this.state.own[i].username) && (this.state.password === this.state.own[i].password)){
                alert(" welcome " + this.state.own[i].ownerFirstName + " " + this.state.own[i].ownerLastName);
                find=1;
                this.setState({restruantId:this.state.own[i].restruantId});
                console.log(this.state.restruantId);
                localStorage.setItem("restruantId",this.state.own[i].restruantId);
                this.props.history.push("/addfooditem");
            }
        }
        if(find===0){
            alert("Invalid Username or Password");
        }
    }

    componentDidMount(){
        let Owner= { username: this.state.username, password: this.state.password }
        console.log(this.state.username)
        console.log('Owner =>' + JSON.stringify(Owner));
        RestaurantService.getAllOwner().then((res) => {
            this.setState({ Owner: res.data })
            this.state.own = (res.data);
            console.log(this.state.own);
        })
    }

    render(){
        return(
            <div className='wholeBodyLogin'>
                <div className="containerLogin" id="containerLogin">
                    <div className="form-containerLogin sign-in-containerLogin">
                        <form >
                            <h1>Owner Login Page</h1>
                            <div style={{ margin: '30px 0' }}>
                                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeOwnerUsername} />
                                <input type="text" placeholder="Password" name="password" value={this.state.password}  onChange={this.changeOwnerPassword}/>
                            </div>
                            <button onClick={this.validateOwner}>Login</button>

                            {/* <button >Back to Home page</button> */}
                        </form>
                    </div>

                </div>

            </div>
        )
    }

}
export default OwnerLogin;