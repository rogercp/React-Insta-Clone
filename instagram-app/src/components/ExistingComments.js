import React from 'react';
import './CommentSection.css';

const ExistingComments=props=>{
return(
    <div className="inline-comments">
        <p>
        {props.comments.username}:
        </p>
        <p>
        {props.comments.text}
        </p>
    </div>
)


}
export default ExistingComments;