import React from 'react';
import './CommentSection.css';

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
export default ExistingComments;