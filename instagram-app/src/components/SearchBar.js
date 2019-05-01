import React from 'react';
import './SearchBar.css';

  const SearchBar=props=>{
    
    return (
          <div className="search-bar">
              <i class="fab fa-instagram"></i>
              <h6>Instagram</h6>
              <div>

              <input onKeyDown={props.searchPosts}
                  type="text"
                  name="input"
                  id="new-search"
                  placeholder="...type"/>
            </div>

            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-user-alt"></i>
            

        </div>
      );
    }
  
  
  export default SearchBar;