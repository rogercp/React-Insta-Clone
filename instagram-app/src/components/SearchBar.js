import React from 'react';
import './SearchBar.css';

  class SearchBar extends React.Component {
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
          <div className="search-bar">
              <i class="fab fa-instagram"></i>
              <h6>Instagram</h6>
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="input"
                id="new-search"
                value={this.state.input}
                onChange={this.onUpdate}
                placeholder="...type"
            />
            <button type="submit">search</button>
            </form>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-user-alt"></i>
            

        </div>
      );
    }
  }
  
  export default SearchBar;