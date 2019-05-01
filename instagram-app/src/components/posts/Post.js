import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import PostLikes from './PostLikes';

class Post extends React.Component{

    constructor(props){
        super(props);
            this.state={
                likes:props.data.likes
        };
    }

    addLike=()=>{
        const like=this.state.likes++;
        this.setState({like});
    }

    render(){
            return(
                <div className="postie">
                     <div className="thumbnail">
                        <img className="thumbnail-pic" src={this.props.data.thumbnailUrl} alt={this.props.data.username}/><h5>{this.props.data.username}</h5>
                    </div>
                    <img className="main-pic" src={this.props.data.imageUrl}/>
                    <div className="btm-sec">
                    <PostLikes likes={this.state.likes}
                    addLike={this.addLike} />
                    <CommentSection comments={this.props.data.comments} 
                    postId={this.props.data.username}/>
                    </div>
                </div>
            )
            }
}


Post.propTypes=({
    data:PropTypes.shape({
        username:PropTypes.string,
        thumbnailUrl:PropTypes.string,
        imageUrl:PropTypes.string,
        likes:PropTypes.number,
        timestamp:PropTypes.string
    })
})


 export default Post;

