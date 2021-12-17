import React from 'react';
import '../LoginForm/form.css';

import Line from '../../ui/Line/Line';
import Logo from '../../ui/Logo/Logo';
import Login from '../LoginInput/LoginInput';
import Box from '../../ui/Box/Box';
import LoginIcon from '../../ui/LoginIcon/LoginIcon';

function Form() {
  return (
    <>
      <div className="login__form">
        <Logo />
        <Login />
        <Line />
        <LoginIcon />
        <span className="login__password">Did you forget your password? </span>
      </div>
      <Box text="Don't you have an account?" />
    </>
  );
}

export default Form;
