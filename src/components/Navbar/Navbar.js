import React from 'react';
import '../Navbar/navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import NavbarIcon from '../NavbarIcon/NavbarIcon';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__body">
          <div className="navbar__logo">
            <img
              src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              alt=""
            />
          </div>

          <div className="navbar__search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search" className=''/>
          </div>
          <NavbarIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
