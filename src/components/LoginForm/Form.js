import React from 'react';
import '../LoginForm/form.css';
import Button from '../../ui/Button/Button';
import Line from '../../ui/Line/Line';
import Logo from '../../ui/Logo/Logo';
import { AiFillFacebook } from 'react-icons/ai';
import Login from '../LoginInput/LoginInput';
import Box from '../../ui/Box/Box';

function Form() {
  return (
    <>
      <div className="login__form">
        <Logo />
        <Login />
        <Button>Login</Button>
        <Line />
        <div className="login__icon">
          <AiFillFacebook style={{ color: ' #3b5998 ' }} size={20} />
          <span className="login__text">Login with Facebook</span>
        </div>
        <span className="login__password">Did you forget your password? </span>
      </div>
      <Box text="Don't you have an account?" link="Register" />
    </>
  );
}

export default Form;
