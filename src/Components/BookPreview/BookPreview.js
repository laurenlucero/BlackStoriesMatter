import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const BookPreview = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.authorName}</p>
    </div>
  );
};

export default BookPreview;
