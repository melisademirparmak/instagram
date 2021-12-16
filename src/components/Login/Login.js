import React from 'react';
import Form from '../LoginForm/Form';
import '../Login/login.css';

function Login() {
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
