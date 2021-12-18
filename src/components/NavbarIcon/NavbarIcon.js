import React from 'react';
import './navbaricons.css';
import { AiFillHome } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { TiDocumentAdd } from 'react-icons/ti';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';

function NavbarIcon() {
  return (
    <div className="navbar__icon">
      <AiFillHome size={23} />
      <BiMessageRounded size={23} />
      <TiDocumentAdd size={23} />
      <RiCompassDiscoverLine size={23} />
      <FaRegHeart size={23} />
    </div>
  );
}

export default NavbarIcon;
