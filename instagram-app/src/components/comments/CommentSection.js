import React from 'react';
import ExistingComments from './ExistingComments';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Button from '../styles/Button'




const Inp=styled.input`
  flex: 8;
  border: none;
  border-bottom: 2px solid black;
  margin-right:5px;
  margin-left:5px;
`


class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        newComment:''
      };
    }

            onChange = event => {
              this.setState({ newComment: event.target.value });
            };
          

            submitComment=event=>{
              event.preventDefault();
              const newComment = {  username: 'rognelius', text: this.state.newComment };
              const comments = this.state.comments.slice();
              comments.push(newComment);
              this.setState({ comments, newComment: '' });
            }


    render() {
      return (
        <div>

          {this.state.comments.map((e,i)=><ExistingComments  comments={e} key={i}/>)} 

        <form style={{display:'flex'}}onSubmit={this.submitComment}>
          <Inp
            type="text"
            name="input"
            id="new-comment"
            value={this.state.newComment}
            placeholder="...comment"
            onChange={this.onChange}
          />
          <Button>comment</Button>
        </form>
      
      </div>
      );
    }
  }


  CommentSection.propTypes={
    comments:PropTypes.arrayOf(
      PropTypes.shape({
        username:PropTypes.string,
        text:PropTypes.string
        
      })
    )
  }

  export default CommentSection;