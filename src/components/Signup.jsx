import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 fw-bold text-center">Please Sign up</h1>
        <div className="form-floating mt-3">
          <input
            type="text"
            className="form-control rounded-pill"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mt-2">
          <input
            type="email"
            className="rounded-pill form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-2">
          <input
            type="password"
            className="rounded-pill form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg rounded-pill btn-primary mt-3" type="submit">
          Sign Up
        </button>
        <p className="text-center text-dark p-2">
          Have an account already ? <Link to="/signin">Sign In </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
