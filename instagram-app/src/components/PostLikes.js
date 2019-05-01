import React from 'react';
import './PostContainer.css';

const PostLikes=props=>{
    return [
             <div
                key="likes-logo"
                >
                <div className="like-container">
                <i onClick={props.addLike} className="far fa-heart" />
                <i className="far fa-comment" />
                </div>
            </div>,
            <div className="like-sec" key="like-counter">
                <div className="like-section-wrapper"><strong>{props.likes} likes</strong></div>
            </div>

    ]
}
export default PostLikes;