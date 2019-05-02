import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Bolder from '../styles/Bolder'


const ExistingComments=props=>{
return(
    <div className="inline-comments">
        <p>
       <Bolder>{props.comments.username}:</Bolder> 
        </p>
        <p>
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