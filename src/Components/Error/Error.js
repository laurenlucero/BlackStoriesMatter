import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.5em;
`;

const Error = () => {
  return (
    <Wrapper>
      <h2>Error 404</h2>
      <p>This page that does not exist... please try again!</p>
    </Wrapper>
  );
};

export default Error;
