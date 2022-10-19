import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login </h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required/>
          <input className="btn-submit" type="submit" value="login" />
        </div>
      </form>
      <p>New to Ema John <Link to='/signup'>Create a New Account</Link></p>
    </div>
  );
};

export default LogIn;
