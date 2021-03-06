import MdHeart from "react-ionicons/lib/MdHeart";
import MdHeartOutline from "react-ionicons/lib/MdHeartOutline";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1em;
`;

const BookPreview = ({ title, authorName, id, favorite, toggleFavorites }) => {
  return (
    <Wrapper>
      <p>{title}</p> <br />
      <p>{authorName}</p>
      {favorite ? (
        <div>
          <MdHeart
            color="#FF2243"
            fontSize="40"
            onClick={() => toggleFavorites(id)}
          />
        </div>
      ) : (
        <div>
          <MdHeartOutline
            color="black"
            fontSize="40"
            onClick={() => toggleFavorites(id)}
          />
        </div>
      )}
    </Wrapper>
  );
};

BookPreview.propTypes = {
  book: PropTypes.object,
  favorite: PropTypes.bool,
  id: PropTypes.string,
  toggleFavorites: PropTypes.func,
};

export default BookPreview;
