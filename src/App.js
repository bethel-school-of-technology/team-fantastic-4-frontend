import React from 'react'
import About from './About'
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