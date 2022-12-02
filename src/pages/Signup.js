import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../assets/styles/SignLog.css";

import axios from "axios";
const url = "http://localhost3000";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(`${url}/signup`, {
        email: email,
        password: password,
        username: username,
      });
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      } else {
        alert("an error has occured, please try again");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Email already exists!");
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signlog-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signlog-form">
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="username"
          type="text"
        />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="Email"
          type="email"
        />
        <span className="signlog-error-message">{errorMessage}</span>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="password"
          type="password"
        />
        <button type="submit">Signup</button>
      </form>
      <Link to="/login">already user ? Login</Link>
    </div>
  );
};

export default Signup;
