import React, { useState } from 'react';
import axios from "axios";
import '../styles/global.css';
import '../styles/register.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (username==""||email==""||password==""){
      setError(1);
    }
    else if (password!==confirmPassword){
      setError(2);
    }
    else{
      const response =await axios.post('http://localhost:8080/TechShop/register',{
        "email": email,
        "password": password,
        "username": username
      });
      if (response.data == "User already exists"){
        console.log(response.data)
        setError(3);
      }
    else{
      setError(0);
      alert("Registration Successful!");
      window.location.href="/login"; 
    }
  }
};
  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      {error ==1 && (<div className="register">Please fill in all the fields correctly!</div>)}
      {error ==2 && (<div className="register">Wrong Password Confirm!</div>)}
      {error ==3 && (<div className="register">User already exists</div>)}
    
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          id="confirmPassword"
          type="password"
          className="form-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
