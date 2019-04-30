import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from "./components/Post"
import SearchBar from "./components/SearchBar"


class App extends React.Component {
  constructor(){
    super()
      this.state={
        data:[],
       }
    }

    componentDidMount(){
      this.setState({data:dummyData})
    }
  

  render() { 
    return ( 
      <div className="App">
      <SearchBar />
      <PostContainer data={this.state.data} />

      </div>
     );
  }
}


 



export default App;
