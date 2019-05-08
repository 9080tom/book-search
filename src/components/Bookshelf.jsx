import React from "react";
import Books from "./Book";

const Bookshelf = props => {
  return (
    <ul>
      {props.books.map((book, index) => (
        <Books book={book} index={index} key={index} />
      ))}
    </ul>
  );
};

export default Bookshelf;
