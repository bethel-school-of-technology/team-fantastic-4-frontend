import Carousel from 'react-bootstrap/Carousel';
import "./CarouselFadeExample.css"
import { Link } from "react-router-dom";


function CarouselFadeExample() {
  return (
          
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.eharmony.com/wplp/wp-content/uploads/2022/10/eharmony2944_B_2048x1080_sharp_80-1-1920x800.jpg"
        alt="First slide"
      />
      
      <Carousel.Caption>
      <h1>Faithful Connections</h1>
         <p id='top'>Welcome to our Site: Meet people, not profiles.</p>
        <Link to="/login" className="nav-link">Log In</Link>
        {/* <Link to="/create-account" className="nav-link">Create Account</Link> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.eharmony.com/wplp/wp-content/uploads/2022/10/eHarmony0095_2048x1080_80Pro-1-1920x800.jpg"
        alt="Second slide"
      />
        
      <Carousel.Caption>
         <h1>Faithful Connections</h1> 
        <p id='top'>Welcome to our Site: Meet people, not profiles.</p>
        <Link to="/login" className="nav-link">Log In</Link>
        {/* <Link to="/create-account" className="nav-link">Create Account</Link> */}
      </Carousel.Caption>
    </Carousel.Item>
    {/* <Carousel.Item>
    
      <img
        className="d-block w-100"
        src="https://apis.xogrp.com/media-api/images/25bc3b02-124d-11e4-843f-22000aa61a3e"
        alt="Third slide"
      />
          
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
);
}

export default CarouselFadeExample;
