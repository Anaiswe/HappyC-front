import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "../assets/styles/SignLog.css";

const url = "http://localhost:3000";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.post(`${url}/login`, {
        email: email,
        password: password,
      });
      if (response.data.token) {
        setUser(response.data.token);
        setIsLoading(false);
      } else {
        alert("Error, please try again.");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("wrong email or password, please try again.");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signlog-container">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit} className="signlog-form">
        <input
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="email"
          type="email"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="password"
          type="password"
        />
        <span className="signlog-error-message">{errorMessage}</span>
        {isLoading ? (
          <div>is loading...</div>
        ) : (
          <button disabled={isLoading ? true : false} type="submit">
            Login
          </button>
        )}
      </form>
      <Link to="/signup">signup</Link>
    </div>
  );
};

export default Login;
