import React from 'react';
import PropTypes from 'prop-types';
import Bolder from '../styles/Bolder'


const ExistingComments=props=>{
return(
    <div className="inline-comments" style={{display:'flex'}}>
        <p style={{marginRight:'15px'}}>
       <Bolder>{props.comments.username}:</Bolder> 
        </p>
        <p style={{marginRight:'15px'}}>
        {props.comments.text}
        </p>
    </div>
)

}


ExistingComments.propTypes={
    comments:PropTypes.shape({
        username:PropTypes.string,
        text:PropTypes.string,
    })
}

export default ExistingComments;