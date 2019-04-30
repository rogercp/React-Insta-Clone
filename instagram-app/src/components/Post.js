import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import PostLikes from 'PostLikes';

class PostContainer extends React.Component{

    constructor(props){
        super(props);
            this.state={
                likes:props.post.likes
        };
    }


    render(){
            return(
                <div >
                     <div className="thumbnail">
                        <img className="thumbnail-pic" src={this.props.post.thumbnailUrl} alt={this.props.post.name}/><h5>{this.props.post.username}</h5>
                    </div>
                    <img className="main-pic" src={this.props.post.imageUrl}/>
                    <PostLikes />
                    <CommentSection />
                
                </div>
            )
            }
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

