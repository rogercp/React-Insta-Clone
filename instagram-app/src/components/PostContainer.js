import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

function PostContainer(props){
    return(
        <div>
            {props.data.map(post=>(
                <div key={post.username} className="post">
                <div className="thumbnail"><img src={post.thumbnailUrl} alt={post.name}/><h5>{post.username}</h5></div>
                <img src={post.imageUrl} alt={post.name}/>
                <div className="pic-icons"><i class="far fa-heart"></i><i class="far fa-comment"></i></div>
                <p>{post.likes}</p>
                <div className="comments">
                {post.comments.map((e,i)=> <div><p key={i}>{e.username}</p> <p key={i}>{e.text}</p></div>)}
                </div>
                <CommentSection />

        </div>
                
            ))}
            
            
        </div>
    )
}

PostContainer.propTypes={

}

 export default PostContainer;