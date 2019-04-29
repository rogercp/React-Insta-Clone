import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ""
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
  
  export default CommentSection;