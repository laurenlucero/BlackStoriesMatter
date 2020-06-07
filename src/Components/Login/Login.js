import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <h2>Welcome to Black Stories Matter!</h2>
      <h3>
        Our mission is to share books by Black authors for readers to find
        mirrors or windows in.
      </h3>
      <h4>What are mirrors and windows?</h4>
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
      <h4>Login to find stories!</h4>
      <form>
        <label htmlFor="username">Enter your username: </label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Enter your username: </label>
        <input
          id="password"
          name="password"
          placeholder="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="purpose">Are you looking for mirrors or windows?</label>
        <select id="purpose" onChange={(e) => setPurpose(e.target.value)}>
          <option value="''"> - Please share why you are here - </option>
          <option value="Mirrors">Mirrors</option>
          <option value="Windows">Windows</option>
          <option value="Both">Both</option>
        </select>
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

export default Login;
