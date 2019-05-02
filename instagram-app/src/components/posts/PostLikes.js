import React from 'react';
import './PostContainer.css';
import Bolder from '../styles/Bolder'
import Icons from '../styles/Icons';

const PostLikes=props=>{
    return (
             <div
                key="likes-logo"
                >
                <div className="like-container">
                <Icons onClick={props.addLike} className="far fa-heart" />
                <Icons className="far fa-comment" />
                </div>
            
            <div style={{ paddingTop: '15px'}} key="like-counter">
                <div className="like-section-wrapper"><Bolder>{props.likes} likes</Bolder></div>
            </div>
            </div>
    );
};

export default PostLikes;