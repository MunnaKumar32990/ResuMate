import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Router>
  );
};

export default App;
