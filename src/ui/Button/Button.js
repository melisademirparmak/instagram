import React from 'react';
import '../Button/button.css';

function Button({ children }) {
  return (
    <div className="button">
      <button className="button__children">{children}</button>
    </div>
  );
}

export default Button;
