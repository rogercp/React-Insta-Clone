import React from 'react';
import CommentSection from './CommentSection';
// import PropTypes from 'prop-types';
import './PostContainer.css';
import PostLikes from './PostLikes';

class Post extends React.Component{

    constructor(props){
        super(props);
            this.state={
                likes:props.data.likes
        };
    }

    addLike(){
        let like=this.state.likes++;
        this.setState({like});
    }

    render(){
            return(
                <div >
                     <div className="thumbnail">
                        <img className="thumbnail-pic" src={this.props.data.thumbnailUrl} alt={this.props.data.username}/><h5>{this.props.data.username}</h5>
                    </div>
                    <img className="main-pic" src={this.props.data.imageUrl}/>
                    <PostLikes likes={this.state.likes}
                    addLike={this.addLike} />
                    <CommentSection comments={this.props.data.comments} 
                    postId={this.props.data.username}/>
                </div>
            )
            }
}

 export default Post;

