import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Bookshelf from "./components/Bookshelf.jsx";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    Books: []
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Bookshelf />
      </div>
    );
  }
  componentDidMount() {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&";
    axios.get(url).then(({ data: { items } }) => {
      items = items.map(item => item.volumeInfo);
      console.log(items);
    });
  }
}

export default App;
