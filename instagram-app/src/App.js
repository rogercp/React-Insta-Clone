import React from 'react';
import PostsPage from "./components/posts/PostsPage"
import Login from './components/login/Login';
import Authenticate from './components/authentication/withAuthenticate';
import styled from 'styled-components'

const TheAuthentication=Authenticate(PostsPage)(Login);

const AppCss=styled.div`
text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  justify-content: center;
`

class App extends React.Component{
  constructor(){
    super();
    this.state={}
  }

  render(){
    return (
      <AppCss>
      <TheAuthentication/>
      </AppCss>
      
    )
  }
}

export default App;
