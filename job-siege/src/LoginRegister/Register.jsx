import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkPasswordMatch = () => {
    return formData.password === formData.confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkPasswordMatch()) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      window.alert("Successfully Registered");
      navigate("/");
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="login">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="app-name-register">
          <p>
            <span style={{ color: "#975842", height: "3vh" }}>J</span>ob{" "}
            <span style={{ color: "#975842", height: "3vh" }}>S</span>iege
          </p>
          <p
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
        <div className="get-started-now">
          <p>Get Started Now</p>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
            <label>Email address</label>
            <input
              type="email"
              value={formData.emailId}
              name="emailId"
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              required
            />
            {errorMessage && (
              <p style={{ color: "red", margin: "0" }}>{errorMessage}</p>
            )}
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="or-line">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <div className="dont-have-account">
          <p>
            Have an account?{" "}
            <span
              onClick={handleLogin}
              style={{ color: "brown", cursor: "pointer" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
