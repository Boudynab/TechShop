import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/login.css';
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userId, setuserId] = useState();
  const [username, setusername] = useState();

  const [error, setError] = useState(0);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    if(email ===""||password ===""){
      setError(1);
    }
    else{
      const response = await axios.post('http://localhost:8080/TechShop/login',{
        "id": userId,
        "username": username,
        "email": email,
        "password": password
      });
      // console.log(response.data.id);
      // console.log(response.data.username);
      // setuserId(response.data.id);
      // setusername(response.data.username);
      if(response.data == "User not found"){
        console.log(response.data);
        setError(2);
      }
      else if(response.data == "Wrong Password"){
        console.log(response.data);
        setError(3);
      }
      else{
        setError(0);
        console.log(response.data);
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
        console.log("Logged In Successfully");
        // window.location.href="/";
      }
    }
    // console.log(email);
    // console.log(password);
    // console.log(userId);
    // console.log(username);
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      {error ==1 && (<div className="register">Please fill in all the fields</div>)}
      {error ==2 && (<div className="register">Please Register First!</div>)}
      {error ==3 && (<div className="register">Incorrect Password!</div>)}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
