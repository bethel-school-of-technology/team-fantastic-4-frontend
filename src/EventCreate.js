import { Button, Container } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import { useState } from 'react';
import axios from 'axios';

 function EventCreate() {
 const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios.post('http://localhost:3000/events', inputs)
        .then((response) => {
          alert('login succesful')
        
        });
  }

return (
  <Container>
   <Home></Home>
   
  {/* <div className="login">
    <div className="loginWrapper">
    <div className="loginLeft">
        <h3 className="loginLogo">Faithful Connections</h3>
        <span className="loginDesc">Connect with people and have a fanstastic time persuing possible relationships</span>
    </div> */}
    {/* <div className="loginRight"></div>
      <div className="loginBox"></div> 
        <input placeholder="Email" className="loginInput" />
        <input placeholder="Password" className="loginInput" />
        <button className="loginButton">Log In</button>
        <span className="loginForgot">Forgot Password?</span>
        <button className="loginRegisterButton">Create a New Account</button> */}
    
        
      
      <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Title:</Form.Label>
        <Form.Control type="text" name="eventTitle" placeholder="Enter title"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Start Date</Form.Label>
        <Form.Control type="date" name="eventDate" placeholder="Enter Date"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Start Time</Form.Label>
        <Form.Control type="time" name="eventTime" placeholder="Enter Time"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Location</Form.Label>
        <Form.Control type="text" name="eventLocation" placeholder="Enter Location"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Price</Form.Label>
        <Form.Control type="number" name="eventPrice" placeholder="Enter Price"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Description</Form.Label>
        <Form.Control type="text" name="eventDescription" placeholder="Enter Description"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Image URL Address</Form.Label>
        <Form.Control type="text" name="eventImage" placeholder="Enter Image"
          onChange={handleChange}
          required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">Submit</Button>

    </Form>



           {/* <Form>
           <div className="loginLeft"></div>
           <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
           <Form.Label column sm="2">
             Email
           </Form.Label>
           <Col sm="10">
             <Form.Control plaintext defaultValue="email@example.com" />
           </Col>
         </Form.Group>

         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
         <Form.Label column sm="2">
             Password
           </Form.Label>
           <Col sm="10">
           <Form.Control type="password" placeholder="Password" />
           </Col>
           </Form.Group>
         </Form>
     */}
     {/* </div>
//   </div> */}
   </Container>
  
 )
 }

 export default EventCreate