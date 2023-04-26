import React from "react";
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about-page' element={<About />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;