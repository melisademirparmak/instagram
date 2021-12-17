import React from 'react';
import '../RegisterForm/register.css';
import '../LoginForm/form.css';
import Logo from '../../ui/Logo/Logo';
import LoginIcon from '../../ui/LoginIcon/LoginIcon';
import Line from '../../ui/Line/Line';
import RegisterInput from '../RegisterInput/RegisterInput';
import Box from '../../ui/Box/Box';

function RegisterForm() {
  return (
    <div className="register__form">
      <div className="login__card">
        <div className="login__form">
          <Logo />
          <span className="register__text">
            Sign up to see your friends' photos and videos.
          </span>
          <LoginIcon />
          <Line />
          <RegisterInput />
        </div>
      </div>
      <Box text="Do you have an account?" />
    </div>
  );
}

export default RegisterForm;
