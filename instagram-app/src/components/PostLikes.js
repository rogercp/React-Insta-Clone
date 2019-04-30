import React from 'react';
import './PostContainer.css';

const PostLikes=props=>{
    return [
             <div
                className="like-section"
                key="likes-logo"
                >
                <div className="like-container">
                <i onClick={props.addLike} className="far fa-heart" />
                <i className="far fa-comment" />
                </div>
            </div>,
            <div className="like-section" key="like-counter">
                <div className="like-section-wrapper">{props.likes} likes</div>
            </div>

    ]
}
export default PostLikes;