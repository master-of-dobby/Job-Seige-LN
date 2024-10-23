import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Authentication/AuthContext";

function Login() {
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const authenticateCreds = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: formData.emailId,
        password: formData.password,
      });
      console.log(response);
      return response.data; // Return the response if needed for further validation
    } catch (e) {
      const errorMessage =
        e.response?.data?.message || "Enter correct email and password";
      console.log(errorMessage);
      throw new Error(errorMessage); // Throw an error to handle in the calling function
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submit

    if (!formData.emailId || !formData.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (!isEmailValid(formData.emailId)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const token = await authenticateCreds(); // Call authenticateCreds, if successful, navigate
      localStorage.setItem("token", token);
      login(token);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message); // Set error message from caught error
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  };

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleForgotPassword = () => {
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
            />

            <div className="password-spacing">
              <label>Password</label>
              <p onClick={handleForgotPassword} className="forgot-password">
                Forgot password?
              </p>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
            {errorMessage && (
              <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
            )}
          </form>
        </div>
        <div className="or-line">
          <hr />
          <p>or</p>
          <hr />
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
