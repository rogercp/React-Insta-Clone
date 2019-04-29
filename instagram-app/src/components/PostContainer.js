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
                <div className="commentos">
                <CommentSection />
                </div>

        </div>
                
            ))}
            
            
        </div>
    )
}

PostContainer.propTypes={
    data: PropTypes.arrayOf(
    PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl:PropTypes.string.isRequired,
        imageUrl:PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp:PropTypes.string.isRequired,
        comments:PropTypes.arrayOf(
            PropTypes.shape({
                username:PropTypes.string,
                text:PropTypes.string,
            })
    )
})
    )
}

 export default PostContainer;