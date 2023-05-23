import React from 'react';
import Home from './Home';
import LogIn from './LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselFadeExample from './CarouselFadeExample';
import AboutUs from './About';
import ContactUs from './ContactUs';
import Register from './Register';
import EventCalendar from './EventCalendar';
// import LogOut from './LogOut';
import EventCreate from './EventCreate';
import EventDetails from './EventDetails';
import Footer from './Footer';

function App() {
  return (
    <div className='page-container'>
    <div className="content-wrap">
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
        <Route path='details' element={<EventDetails />} />
        
      </Routes>
    </BrowserRouter>
    </div>
   <Footer />
   </div>
   
  )
  
}

export default App;
