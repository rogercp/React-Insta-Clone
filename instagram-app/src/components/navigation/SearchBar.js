import React from 'react';
import './SearchBar.css';

  const SearchBar=props=>{
    
    return (
          <div className="search-bar">
              <i className="fab fa-instagram"></i>
              <h6>Instagram</h6>

              <div>
            
              <input onKeyDown={props.searchPosts}
                  type="text"
                  name="input"
                  id="new-search"
                  placeholder="...type"/>

            </div>

            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-user-alt"></i>
            

        </div>
      );
    }
  
  
  export default SearchBar;