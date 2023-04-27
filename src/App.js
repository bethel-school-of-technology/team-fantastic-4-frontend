import React from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-routes-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;