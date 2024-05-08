// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useLocalStorage } from './useLocalStorage';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Corrected variable name
  const{setName}= useLocalStorage(username);
  
  

  const equalUsername = () => {
   
    const storedUsername = localStorage.getItem(username); 
    if (storedUsername) {
      navigate('/booklist');
    }
    // else{
    //   alert('not stored in local storage');
    // }
  };
  const handleUsernameChange = (e) => {
    equalUsername();
    setUsername(e.target.value);
 
  };
  if (username.endsWith('@gmail.com')){
    equalUsername(username);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handlesub =()=>{
    setName(username)
  }
   
  const handleSubmit = (e) => {
    handlesub();
    e.preventDefault();
   


    // Validation logic
    if (!username.endsWith('@gmail.com')) {
      alert('Username must be gmail');
      return;
    }

    if (password.length < 4) {
      alert('Password must be at least 4 characters long');
      return;
    }

    // Here you can add login logic, e.g., sending a request to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to the book list page after successful login
    navigate('/booklist');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
