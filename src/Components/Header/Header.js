import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const userMessage = () => {
    return (
      <div>
        <p>
          Welcome, {props.user.username}. 
          We hope you find {props.user.purpose} in our stories!
        </p>
        <Link to="/">
          <button onClick={() => props.resetUser()}>Logout</button>
        </Link>
      </div>
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
