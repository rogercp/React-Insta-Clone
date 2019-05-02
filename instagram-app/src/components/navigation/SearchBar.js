import React from 'react';
import './SearchBar.css';
import styled from 'styled-components'




const SearchStyles=styled.div`
 display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    margin-top: -10px;
`


  const SearchBar=props=>{
    
    return (
          <SearchStyles>
              <i className="fab fa-instagram"></i>
              <h6 style={{fontSize:'1.8rem'}}>Instagram</h6>

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
            

        </SearchStyles>
      );
    }
  
  
  export default SearchBar;