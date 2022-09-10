import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchId: this.props.match.params.id,
            username:'',
            password:'',
        }


    }

    validateUser=(e)=>{
        // const isValid = AAAAAAA.validate(e);
        // if (isValid) {
        //   // console.log(fields, errors);
        //   // Perform api call here
        // }
    }


    render() {

        return (
            <div>
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form >
                            <h1>Login Page</h1>
                            <div style={{ margin: '30px 0' }}>
                                <input type="text" placeholder="username" name="username" value={this.state.username}/>
                                <input type="password" placeholder="Password" name="Password" value={this.state.Password}/>
                            </div>
                            <button onClick={this.validateUser}>Login</button>
                        </form>
                    </div>

                </div>

            </div>

        )

    }

}
export default Login;