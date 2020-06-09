import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyle";
import React from "react";
import styled from "styled-components";

const { black, yellow } = theme;

const UserMessage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em;

  button {
    background: ${yellow};
    border-radius: 5px;
    box-shadow: 2px 2px 2px ${black};
    border: solid ${black} 0.5px;
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
          Welcome, {props.user.username}. We hope you find {props.user.purpose}{" "}
          in our stories!
        </p>
        <Link to="/">
          <button onClick={() => props.resetUser()}>Logout</button>
        </Link>
      </UserMessage>
    );
  };

  return (
    <div>
      <h1>Black Stories Matter</h1>
      {props.user && userMessage()}
    </div>
  );
};

export default Header;
