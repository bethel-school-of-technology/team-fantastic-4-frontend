import React from 'react';
import Home from './Home';
import LogIn from './LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CarouselFadeExample from './CarouselFadeExample';
import AboutUs from './About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<h1 className='h1'>Welcome to our Site: Meet people, not profiles</h1>} /> */}
        {/* <Route index element={<CarouselFadeExample />} /> */}
        <Route path='about-us' element={<AboutUs />} />
        <Route path='login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
