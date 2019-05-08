import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Bookshelf from "./components/Bookshelf.jsx";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    Books: [],
    url: "https://www.googleapis.com/books/v1/volumes?q=book"
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Search changeSearch={this.changeSearch} />
        <Bookshelf books={this.state.Books} />
      </div>
    );
  }
  changeSearch = (query = "book") => {
    this.setState({
      url: `https://www.googleapis.com/books/v1/volumes?q=${query}`
    });
  };
  componentDidUpdate() {
    const url = this.state.url;
    axios.get(url).then(({ data: { items } }) => {
      items = items.map(item => item.volumeInfo);
      this.setState({ Books: items });
    });
  }
  componentDidMount() {
    const url = this.state.url;
    axios.get(url).then(({ data: { items } }) => {
      items = items.map(item => item.volumeInfo);
      this.setState({ Books: items });
    });
  }
}

export default App;
