import { Link } from "react-router-dom";
import { theme } from "../../theme/globalStyle";
import React, { useState } from "react";
import styled from "styled-components";

const { black, white, yellow } = theme;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5em;

  p {
    margin: 0.5em;
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
        mirrors & windows.
      </h3>
      <h4>What are mirrors & windows?</h4>
      <p>
        Mirrors reflect a reader's own life. Seeing yourself, your family & your
        culture being valued in the world of a book provides a powerful sense of
        belonging.
      </p>
      <p>
        Books that are windows offer views into other experiences. Windows teach
        people to understand & appreciate differences.
      </p>
      <p>
        Please support the Black authors you find here by buying their books,
        requesting them at libraries, or donating copies to schools & community
        centers!
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
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="purpose">Are you looking for mirrors or windows?</label>
        <select id="purpose" onChange={(e) => setPurpose(e.target.value)}>
          <option value="''">- Please share why you are here -</option>
          <option value="Mirrors">Mirrors</option>
          <option value="Windows">Windows</option>
        </select>
        <p>{error}</p>
        <Link to={checkInputs() ? "/Books" : "/"}>
          <button onClick={handleClick}>Login</button>
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;
