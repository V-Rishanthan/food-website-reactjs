import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Nav/Navigation.jsx";

const App = () => {
  return (
    <>
      <Router>
        {/* Navigation Page*/}
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
