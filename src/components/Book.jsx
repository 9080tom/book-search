import React from "react";

const Books = props => (
  <li key={props.index}>
    <div>{props.book.title}</div>
    <div>{props.book.publisher}</div>
    <img src={props.book.imageLinks.smallThumbnail} alt="a book" />
  </li>
);
export default Books;
