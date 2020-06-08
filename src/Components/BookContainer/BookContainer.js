import React from "react";
import BookPreview from "../BookPreview/BookPreview";
import styled from "styled-components";

const BookContainer = (props) => {
  const books = props.bookInfo.map((book, i) => {
    return (<BookPreview key={book[i]} {...book} />);
  });
  return <div>{books}</div>;
};

export default BookContainer;
