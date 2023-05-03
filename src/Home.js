import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Search } from "@mui/icons-material"
import { Link  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import "./Home.css";



function Home() {
    return (
      
        <Container>
        <div className="NavbarContainer">
        <div className="NavbarLeft">
        <span className="logo">Faithful Connections</span>
        <img src="https://thumbs.dreamstime.com/t/jour-du-s-de-valentine-le-blanc-attach%C3%A9-des-coeurs-sur-un-ordinateur-fond-bureau-tache-floue-illustration-d-108443710.jpg" alt="" className="NavbarImg" />
        </div>
        <div className="NavbarCenter">
        <div className="searchbar">
        <Search className="searchIcon" />
        <input placeholder="Search for people" className="searchInput" />
        </div>
        </div>
        <div className="NavbarRight"></div>
            <div className="NavbarLinks"></div>
            
            <Nav className="ms-auto"> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">AboutUs</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            <Link to="/login" className='nav-link'>Login</Link>
            </Nav>
            </div>
            <h1>Welcome to our Site: Meet people, not profiles</h1>
                <h3>Connect with other singles and zoom speed date.</h3> 
            <p>I am my beloved's, and His desire is toward me.
                Song of Solomom 7:10</p>
                
             </Container> 

          
        
    )

}

export default Home;
