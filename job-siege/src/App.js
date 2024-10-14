import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginRegister/Login";
import Home from "./HomePage/Home";
import Register from "./LoginRegister/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="homePage" Component={Home}></Route>
          <Route path="/register" Component={Register}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
