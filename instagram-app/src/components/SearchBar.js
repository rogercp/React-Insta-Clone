import React from 'react';

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
              <p>Instagram</p>
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="input"
                id="new-search"
                value={this.state.input}
                onChange={this.onUpdate}
            />
            <button type="submit">search</button>
            </form>
            <i class="fab fa-instagram"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-user-alt"></i>
            

        </div>
      );
    }
  }
  
  export default SearchBar;