import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
const MobileNav = ({ setMobileNav }) => {
  return (
    <nav className='text-white'>
      <div className='cursior-pointer' onClick={() => setMobileNav(false)}>
        <IoCloseOutline className='text-4xl' />
      </div>
    </nav>
  );
};

export default MobileNav;
