import React from 'react';
import '../LoginForm/form.css';
import Button from '../../ui/Button/Button';
import Line from '../../ui/Line/Line';
import Logo from '../../ui/Logo/Logo';

function Form() {
  return (
    <div className="login__form">
      <Logo />
      <div class="field">
        <input type="text" required autocomplete="off" id="username" />
        <label for="username" title="User name" data-title="User name" />
      </div>
      <div className="field">
        <input type="password" required autocomplete="off" id="password" />
        <label for="password" title="Password" data-title="Password" />
      </div>
      <Button>Login</Button>
      <Line />
    </div>
  );
}

export default Form;
