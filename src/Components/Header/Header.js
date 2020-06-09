import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyle";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const { black, white, yellow } = theme;

const Wrapper = styled.div`
  background: ${black};
  color: ${white};
  width: 100%;
  padding: 0.5em;
`;

const UserMessage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em;

  button {
    background: ${yellow};
    border-radius: 5px;
    box-shadow: 1px 1px 1px ${white};
    border: none;
    cursor: pointer;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 1em;
    margin-bottom: 0.2em;
    padding: 0.5em;
  }
`;

const Header = (props) => {
  const userMessage = () => {
    return (
      <UserMessage>
        <p>
          Welcome, {props.user.username}. <br /> We hope you find{" "}
          {props.user.purpose} in our stories!
        </p>
        <Link to="/">
          <button onClick={() => props.resetUser()}>Logout</button>
        </Link>
      </UserMessage>
    );
  };

  return (
    <Wrapper>
      <h1>Black Stories Matter</h1>
      {props.user && userMessage()}
    </Wrapper>
  );
};

Header.propTypes = {
  // user: PropTypes.object,
  resetUser: PropTypes.func,
};

export default Header;
