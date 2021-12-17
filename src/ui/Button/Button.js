import React from 'react';
import '../Button/button.css';

function Button({ children, disable }) {
  return (
    <div className="button">
      <button
        className="button__children"
        type="submit"
        disabled={disable}
        style={{ backgroundColor: disable && 'blue' }}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
