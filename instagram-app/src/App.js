import React from 'react';
import './App.css';
import PostsPage from "./components/posts/PostsPage"

class App extends React.Component{
  constructor(){
    super();
    this.state={}
  }

  render(){
    return (
      <div className="App">
      <PostsPage />

      </div>
    )
  }
}

export default App;
