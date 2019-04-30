import React from 'react';
import './CommentSection.css';
import ExistingComments from './ExistingComments';
// import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        newComment:''
      };
    }
    
    render() {
      return (
        <div>

          {this.state.comments.map((e,i)=><ExistingComments  comments={e} key={i}/>)}
        
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            id="new-comment"
            value={this.state.newComment}
            placeholder="...type"
          />
          <button type="submit">comment</button>
        </form>
      
      </div>
      );
    }
  }

  export default CommentSection;