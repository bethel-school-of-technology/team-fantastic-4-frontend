import React from 'react';
import Home from './Home';
import LogIn from './LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselFadeExample from './CarouselFadeExample';
import AboutUs from './About';
import ContactUs from './ContactUs';
import Register from './Register';
import EventCalendar from './EventCalendar';
import EventCreate from './EventCreate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<CarouselFadeExample />} />    
        <Route path='about-us' element={<AboutUs />} />
        <Route path='login' element={<LogIn />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='register' element={<Register />} />
        <Route path='event-calendar' element={<EventCalendar />} />
        <Route path='event-create' element={<EventCreate />} />
      </Routes>
    </BrowserRouter>
   
  )
}
export default App;
