import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import '../LoginIcon/loginIcon.css';

function LoginIcon() {
  return (
    <div className="login__icon">
      <AiFillFacebook style={{ color: ' #3b5998 ' }} size={20} />
      <span className="login__text">Login with Facebook</span>
    </div>
  );
}

export default LoginIcon;
