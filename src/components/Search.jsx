import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <form>
        <input type="text" onChange={this.updateSearch} />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.changeSearch(this.state.search);
          }}
        >
          Search
        </button>
      </form>
    );
  }
  updateSearch = () => {
    this.setState({ search: event.target.value });
  };
}

export default Search;
