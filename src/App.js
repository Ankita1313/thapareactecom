import React from "react";
import { BrowserRouter, Routes, route } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
