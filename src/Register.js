import './Register.css';
import { useState } from 'react';


function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  

  return (
    
    <div className='register-background'>
    <div id="container">
    <form onSubmit={handleSubmit}>
    <label>Email: 
        <input 
          type="text" 
          name="Email" 
          value={inputs.Email || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>Password: 
        <input 
          type="" 
          name="gender" 
          value={inputs.gender || ""} 
          onChange={handleChange}
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
          value={inputs.gender || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>Female: 
        <input 
          type="radio" 
          name="gender" 
          value={inputs.gender || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <input type="submit" />
        <br></br>
        <br></br>
        <label>Already have an account? <u>Login</u></label>
    </form>
    </div>
    </div>
  )
}

export default Register;