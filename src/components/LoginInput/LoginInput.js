import React from 'react';
import '../LoginInput/loginInput.css';

function LoginInput() {
  return (
    <>
      <div class="field">
        <input type="text" required autocomplete="off" id="username" />
        <label for="username" title="User name" data-title="User name" />
      </div>
      <div className="field">
        <input type="password" required autocomplete="off" id="password" />
        <label for="password" title="Password" data-title="Password" />
      </div>
    </>
  );
}

export default LoginInput;
