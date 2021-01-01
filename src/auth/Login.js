import React, { Component } from 'react';
import anlogo from '../img/ammunation-nobg.png';
import Auth from  "./Auth.js";

class Login extends Component {
    render() {
        return(
            <Auth>
                <div>
                    <img src={anlogo} alt="ammunation logo"/>
                    <form>
                        <label htmlFor="email">Email</label><br/>
                        <input type="text" name="email"/><br/>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name="password"/><br/>
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </Auth>
        )
    }
}

export default Login;