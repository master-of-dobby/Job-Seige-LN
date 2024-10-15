import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if fields are empty
    if (!formData.emailId || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    // authentication logic
    navigate("/home");
  };

  const handleForgotPassword = () => {
    // forgot password logic
    navigate("/forgot-password");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="app-name">
          <p>
            <span style={{ color: "#975842" }}>J</span>ob{" "}
            <span style={{ color: "#975842" }}>S</span>iege
          </p>
          <p
            className="app-subtitle"
            style={{
              fontSize: "2vh",
              fontWeight: "500",
              fontFamily: "Preahvihear",
              marginLeft: "18vw",
            }}
          >
            - track your job
          </p>
        </div>
        <div className="welcome-message">
          <div className="welcome-back">
            <p>Welcome back</p>
          </div>
          <div className="welcome-back-subtitles">
            <p>Enter your Credentials to access your account</p>
          </div>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            ></input>

            <div className="password-spacing">
              <label>Password</label>
              <p onClick={handleForgotPassword} className="forgot-password">
                Forgot password ?
              </p>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            ></input>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="or-line">
          <hr></hr>
          <p>or</p>
          <hr></hr>
        </div>
        <div className="dont-have-account">
          <p>
            Don't have an account?{" "}
            <span
              onClick={handleSignUp}
              style={{ color: "brown", cursor: "pointer" }}
            >
              Sign up
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
