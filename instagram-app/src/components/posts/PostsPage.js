import React from 'react';
import './PostContainer.css';
import dummyData from './/dummy-data';
import PostContainer from "./PostContainer"
import SearchBar from "../navigation/SearchBar"



class App extends React.Component {
  constructor(){
    super()
      this.state={
        data:[],
        searchPosts:[]
       }
    }

    componentDidMount(){
      this.setState({data:dummyData})
    }
  
    
    searchPosts=e=>{
      const data=this.state.data.filter(post=>{
        if(post.username.includes(e.target.value)){
          return post;
        }
      });
      this.setState({searchPosts:data});
    }

  render() { 
    return ( 
      <div className="App">
      <SearchBar 
      searchPosts={this.searchPosts}
      // searchInput={this.state.searchInput} 
      />
      <PostContainer 
        data={this.state.searchPosts.length>0?this.state.searchPosts:this.state.data}
      
      />
     

      </div>
     );
  }
}


 



export default App;
