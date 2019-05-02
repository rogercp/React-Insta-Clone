import React from 'react';
import Post from './Post';

import styled from 'styled-components'


const Post_Container=styled.div`
 display: flex;
    flex-direction: column;
    max-width: 501px;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 50px;

`


const PostContainer=props=>{
    return (
        <Post_Container>
            {props.data.map(post=> <Post key={post.username} data={post}/>
            )}
        </Post_Container>
    );
};
export default PostContainer;