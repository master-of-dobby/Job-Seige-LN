import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginRegister/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
