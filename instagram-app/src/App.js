import React from 'react';
import './App.css';
import PostsPage from "./components/posts/PostsPage"
import Login from './components/login/Login';
import Authenticate from './components/authentication/withAuthenticate';


const TheAuthentication=Authenticate(PostsPage)(Login);


class App extends React.Component{
  constructor(){
    super();
    this.state={}
  }

  render(){
    return (
      <div className="app">
      <TheAuthentication/>
      </div>
      
    )
  }
}

export default App;
