import React from 'react';
import './PostContainer.css';

const PostLikes=props=>{
    return [
             <div
                className="like-section"
                key="likes-icons-container"
                onClick={props.addLike}
            >
                <div className="like-section-wrapper">
                <i className="far fa-heart" />
                </div>
                <div className="like-section-wrapper">
                <i className="far fa-comment" />
                </div>
            </div>,
            <div className="like-section" key="likes-container">
                <div className="like-section-wrapper">{props.likes}</div>
            </div>

    ]
}
export default PostLikes;