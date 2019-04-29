import React from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import PostContainer from "./components/PostContainer"


class App extends React.Component {
  constructor(){
    super()
      this.state={
        data:dummyData,
       }
    }
    
  
  



  render() { 
    return ( 
      <div className="App">
      <PostContainer data={this.state.data} />
      </div>
     );
  }
}
 



export default App;
