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

        <Navbar bg="primary" variant="dark">
        {/* <Container> */}
         <div className="NavbarLeft"></div>
          <Navbar.Brand className="logo">Faithful Connections</Navbar.Brand>
          <img src="https://thumbs.dreamstime.com/t/jour-du-s-de-valentine-le-blanc-attach%C3%A9-des-coeurs-sur-un-ordinateur-fond-bureau-tache-floue-illustration-d-108443710.jpg" alt="" className="NavbarImg" />
          <Container> 
          <Nav className="nav-link">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Log In</Link>
            <Link to="/create-account" className="nav-link">Create Account</Link>
          </Nav>      
          
          <div className="NavbarCenter">
         <div className="searchbar">
         <Search className="searchIcon" />
         <input placeholder="Search for people" className="searchInput" />
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
