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

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }


    // loginSubmission=e=>{
    //  const logger=this.state.username;
    //  localStorage.setItem('logger',logger);
    //  window.location.reload();
    // }


    render() { 
        return (  
            <div className="login-page">

                <h1>Instagram</h1>

                <form>
                
                <input
                placeholder="...username"
                value={this.state.username}
                name="username"
                onChange={this.onChange}
                />
                <input
                placeholder="...password"
                value={this.state.password}
                name="password"
                onChange={this.onChange}
                />

                <button type="submit" onClick={this.loginSubmission}>Login</button>
                
                </form>
                

            </div>
        );
    }
}
 
export default Login;