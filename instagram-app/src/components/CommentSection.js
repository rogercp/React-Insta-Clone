import React from 'react';
import './CommentSection.css';
import ExistingComments from './ExistingComments';
import PropTypes from 'prop-types';

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
              this.setState({ comments, comment: '' });
            }


    render() {
      return (
        <div>

          {this.state.comments.map((e,i)=><ExistingComments  comments={e} key={i}/>)} 

        <form onSubmit={this.submitComment}>
        
          <input
            type="text"
            name="input"
            id="new-comment"
            value={this.state.newComment}
            placeholder="...comment"
            onChange={this.onChange}
          />
          <button>comment</button>
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