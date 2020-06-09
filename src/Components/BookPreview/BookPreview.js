import React, { useState } from "react";
import styled from "styled-components";
import MdStar from "react-ionicons/lib/MdStar";
import MdStarOutline from "react-ionicons/lib/MdStarOutline";
import { theme } from "../../theme/globalStyle";

const { black, grey, orange, white, yellow } = theme;

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1em;
`;

const BookPreview = (props) => {
  return (
    <Wrapper>
      <p>{props.title}</p> <br />
      <p>{props.authorName}</p>
      {props.favorite ? (
        <div>
          <MdStar
            color="${black}"
            fontSize="40"
            onClick={() => props.toggleFavorites(props.id)}
          />
        </div>
      ) : (
        <div>
          <MdStarOutline
            color="${black}"
            fontSize="40"
            onClick={() => props.toggleFavorites(props.id)}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default BookPreview;
