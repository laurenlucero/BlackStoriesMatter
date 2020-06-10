import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyle";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const { black, red, white, yellow } = theme;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5em;

  h2,
  h4,
  p {
    margin: 0.3em;
  }

  form {
    align-items: center;
    border-radius: 5px;
    border: none;
    color: ${black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }

  label {
    margin: 0.1em;
  }

  input,
  select {
    background: ${white};
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 1px ${black};
    cursor: pointer;
    padding: 0.5em;
  }

  button {
    background: ${yellow};
    border-radius: 5px;
    border: solid ${black} 0.5px;
    box-shadow: 2px 2px 2px ${black};
    cursor: pointer;
    font-family: "Ubuntu", sans-serif;
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 0.2em;
    padding: 0.5em;
  }
`;

const Error = styled.p`
  color: ${red};
`;

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  const checkInputs = () => {
    return username !== "" && password !== "" && purpose !== "";
  };

  const handleClick = () => {
    checkInputs()
      ? props.setUser({
          username: username,
          purpose: purpose,
        })
      : setError("Please complete all inputs.");
  };

  return (
    <Wrapper>
      <h2>Welcome to BSM!</h2>
      <h3>
        Our mission is to share books by Black authors where readers can find
        mirrors and windows.
      </h3>
      <h4>What are mirrors and windows in books?</h4>
      <p>
        Mirrors reflect a reader's own life. Seeing yourself, your family and
        your culture being valued in the world of a book provides a powerful
        sense of belonging.
      </p>
      <p>
        Books that are windows offer views into other experiences. Windows teach
        people to understand and appreciate differences.
      </p>
      <p>
        Please support the Black authors you find here by buying their books,
        requesting them at libraries, or donating copies to schools and
        community centers!
      </p>
      <h3>Login to find stories!</h3>
      <form>
        <label htmlFor="username">Enter your username: </label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Enter your password: </label>
        <input
          id="password"
          name="password"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="purpose">Are you looking for mirrors or windows?</label>
        <select id="purpose" onChange={(e) => setPurpose(e.target.value)}>
          <option value="''">- Please share why you are here -</option>
          <option value="mirrors">Mirrors</option>
          <option value="windows">Windows</option>
        </select>
        <Error>{error}</Error>
        <Link to={checkInputs() ? "/Books" : "/"}>
          <button onClick={handleClick}>Login</button>
        </Link>
      </form>
    </Wrapper>
  );
};

Login.propTypes = {
  setUser: PropTypes.func,
};

export default Login;
