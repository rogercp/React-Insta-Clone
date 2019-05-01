import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            username:"",
            password:""

        }
    }
    
    render() { 
        return (  
            <div className="login-page">

                <h1>Instagram</h1>

                <form>
                
                <input
                placeholder="username"
                value={this.state.username}
                name="username"
                />
                <input
                placeholder="password"
                value={this.state.password}
                name="password"
                />

                <button type="submit">Login</button>
                
                </form>
                

            </div>
        );
    }
}
 
export default Login;