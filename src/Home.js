import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
                                                                               
import "./Home.css";
// import Navigation from './Navigation';
import { Stack } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import { SearchBar} from "react-router-dom"

function Home() {
    return (
        <>
        <Navbar expand="lg" bg='primary'>
        {/* <Container> */}
         <div className="Navbar"></div>
          <Navbar.Brand className="logo">Faithful Connections</Navbar.Brand>
          <img src="../Navbarimage.jpg" alt="" className="NavbarImg" />
          <Container> 
          <Nav className="nav-link">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
            <Link to="/login" className="nav-link">Log In</Link>
            <Link to="/register" className="nav-link">Create Account</Link>
            <Link to="/event-calendar" className="nav-link">Event Calendar</Link>
          </Nav>  
          
          <div className="NavbarCenter">
         <div className="searchbar">
         <Search className="searchIcon" />
         <input placeholder="Search Event" className="searchInput" />
         </div>
         </div> 
         </Container>
      </Navbar>                         
             <> 
            <h3>Connect with other singles and zoom speed date.</h3><p>I am my beloved's, and His desire is toward me.
                      Song of Solomom 7:10</p><Stack gap={3} className="col-md-10 mx-auto mt-3">
                      </Stack></>
                      </>               
    )

}
export default Home;
