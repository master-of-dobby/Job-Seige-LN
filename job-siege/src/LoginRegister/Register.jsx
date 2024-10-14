import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const checkPasswordMatch = () => {
    return password === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPasswordMatched = checkPasswordMatch();
    if (!isPasswordMatched) {
      window.alert("Password mismatch, please enter the same password :)");
    } else {
      window.alert("Successfully Registered");
      navigate("/");
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Enter your name"
                required
              />
              <label>Email address</label>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                name="emailId"
                placeholder="Enter your email"
                required
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter your password"
                required
              />
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
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
    </>
  );
}

export default Register;
