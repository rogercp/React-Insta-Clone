import React from 'react';
import CommentSection from '../comments/CommentSection';
import PropTypes from 'prop-types';

import PostLikes from './PostLikes';
import styled from 'styled-components'
import Bolder from '../styles/Bolder'


const ThumbNail=styled.div`
     display: flex;
    align-items: center; 
    justify-content: flex-start;
    margin-bottom:10px;
    .thumbnail-pic{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
    }
`


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
                <div style={{ marginBottom: '20px'}}>
                     <ThumbNail>
                        <img  className="thumbnail-pic"src={this.props.data.thumbnailUrl} alt={this.props.data.username}/><Bolder>{this.props.data.username}</Bolder>
                    </ThumbNail>
                    <img className="main-pic" style={{ width: '500px'}}alt={this.props.data.username} src={this.props.data.imageUrl}/>
                    <div style={{padding: '10px'}}>
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

