import React from 'react';

import styled from 'styled-components'
import Icons from '../styles/Icons';



const Header=styled.div`
 display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    margin-top: -10px;
`






  const SearchBar=props=>{
    
    return (
          <Header>
           
              <Icons  className="fab fa-instagram"></Icons>
              <h6 style={{fontSize:'1.8rem'}}>Instagram</h6>
              
              <div>
            
              <input onKeyDown={props.searchPosts}
                  type="text"
                  name="input"
                  id="new-search"
                  placeholder="...type"/>

            </div>

            <Icons className="far fa-compass"></Icons>
            <Icons className="far fa-heart"></Icons>
            <Icons className="fas fa-user-alt"></Icons>
            

        </Header>
      );
    }
  
  
  export default SearchBar;