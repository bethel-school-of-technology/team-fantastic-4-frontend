import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import Home from "./Home";
import Footer from "./Footer";
import { Row, Col, Container} from "react-bootstrap"
import { Link } from 'react-router-dom';



function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios.post('http://localhost:3000/users', inputs)
        .then((response) => {
          alert('registration complete')
          console.log(response)
        });
  }

  

  return (

    <Container>
    <Home></Home>
    <div className='register-background'>
    <div id="container">
    <form onSubmit={handleSubmit}>
    <label>Email: 
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
          required
        />
        </label>
        <br></br>
        <label>Password: 
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
          required
        />
        </label>
        <br></br>
      <label>First Name: 
      <input 
        type="text" 
        name="firstName" 
        value={inputs.firstName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>Last Name: 
      <input 
        type="text" 
        name="lastName" 
        value={inputs.lastName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>Age: 
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>Gender: </label>
        <br></br>
        <label>Male: 
        <input 
          type="radio" 
          name="gender" 
          value="male"
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>Female: 
        <input 
          type="radio" 
          name="gender" 
          value="female"
          onChange={handleChange}
        />
        </label>
        <br></br>
        <input type="submit" />
        <br></br>
        <br></br>
        <label>Already have an account? </label>
        <Link to="/login" >Log In</Link>
    </form>
    </div>
    </div>
    </Container>
  )
}

export default Register;