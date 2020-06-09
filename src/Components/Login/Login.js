import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/globalStyle";

const { blue, error, light, text, yellow } = theme;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  align-items: center;
  justify-content: center;

  h2,
  h3 {
    margin-bottom: 0.5em;
  }

  p {
    margin: 0.2em;
  }

  form {
    border: solid ${text} 1px;
    border-radius: 2px;
    width: 75%;
  }

  label {
    margin: 0.2em;
  }

  input {
    border: none;
    padding: 0.2em;
  }

  button {
    border: none;
  }
`;

const Error = styled.p`
  color: ${blue};
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
      <form>
        <h4>Login to find stories!</h4>
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
        <Error>{error}</Error>
        <Link to={checkInputs() ? "/Books" : "/"}>
          <button onClick={handleClick}>Login</button>
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;
