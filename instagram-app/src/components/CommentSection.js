import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: props.comment
      };
    }
    
    onUpdate = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.addItem(this.state.input);
      this.setState({ input: "" });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            id="new-comment"
            value={this.state.input}
            onChange={this.onUpdate}
            placeholder="...type"
          />
          <button type="submit">comment</button>
        </form>
      );
    }
  }

  CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ 
        text: PropTypes.string, username: PropTypes.string
       })
    )
  };


  
  export default CommentSection;