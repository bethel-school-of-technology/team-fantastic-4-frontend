import { Button, Container } from "react-bootstrap"

// import Navigation from "./Navigation"
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";

 function LogIn() {
return (
  <Container>
  {/* <Navigation></Navigation> */}
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
    
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
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

 export default LogIn