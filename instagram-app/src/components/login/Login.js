import React from 'react';

import styled from 'styled-components'


const LoginPage=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

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


    loginSubmission=e=>{
     const logger=this.state.username;
     localStorage.setItem('logger',logger);
     window.location.reload();
    }


    render() { 
        return (  
            <LoginPage>

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
                

            </LoginPage>
        );
    }
}
 
export default Login;