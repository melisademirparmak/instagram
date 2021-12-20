import React, { useEffect } from 'react';
import Form from '../LoginForm/Form';
import '../Login/login.css';
import { Navigate } from 'react-router-dom';

function Login() {
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      return <Navigate to="/home" />;
    }
  });

  return (
    <div className="login">
      <img
        className="login__image"
        src="https://cdn.discordapp.com/attachments/801909083220475914/920338663001452625/Capture-svg_2.png"
        alt=""
      />
      <div className="login__card">
        <Form />
      </div>
    </div>
  );
}

export default Login;
