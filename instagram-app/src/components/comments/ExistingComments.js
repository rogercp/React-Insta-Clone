import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';


const ExistingComments=props=>{
return(
    <div className="inline-comments">
        <p>
       <strong>{props.comments.username}:</strong> 
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