import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import Home from "./HomePage/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/Home" Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
