import React, { useState } from 'react';
import { menu, close } from '../assets';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Quixilinx_logo from '../assets/Quixilinx_logo.png';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavClick = () => {
    setToggle(!toggle);
  };

  const scrollOffset = -80; // Adjust this value as needed

  return (
    <div className='navbarRectangle w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
      <div className='navbarContentDiv flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          <img src={Quixilinx_logo} alt='logo' className=' xs:ml-5 sm:ml-5 md:ml-3 opacity-[55%] w-full h-[45px]' />
        </div>

        <div className=' navLinkss flex items-center'>
          <ul className='hidden md:flex sm:mr-10'>
            <RouterLink to='/' className='cursor-pointer'>
              <li className='hover:bg-gray-200'>Home</li>
            </RouterLink>
            <ScrollLink to='team' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
              <li className='hover:bg-gray-200'>About us</li>
            </ScrollLink>
            <ScrollLink to='services' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
              <li className='hover:bg-gray-200'>Services</li>
            </ScrollLink>
            <ScrollLink to='team' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
              <li className='hover:bg-gray-200'>Team</li>
            </ScrollLink>
            <li className='hover:bg-gray-200'>Our Products</li>
            <RouterLink to='/bloghome' onClick={handleNavClick}>
              <li className='hover:bg-gray-200'>Blogs</li>
            </RouterLink>
            <ScrollLink to='contactUs' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
              <li className='hover:bg-gray-200'>Contact Us</li>
            </ScrollLink>
          </ul>
        </div>
        <div className='md:hidden' onClick={handleNavClick}>
          <img src={!toggle ? menu : close} alt='menu' className=' hover:bg-gray-200 w-[28px] h-[28px] object-contain me-10 ' />
        </div>
      </div>
      <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
        <RouterLink to='/' className='cursor-pointer'>
          <li className="py-5 text-center hover:bg-gray-200">Home</li>
        </RouterLink>
        <ScrollLink to='team' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
          <li className="py-5 text-center hover:bg-gray-200">About us</li>
        </ScrollLink>
        <ScrollLink to='services' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
          <li className="py-5 text-center hover:bg-gray-200">Services</li>
        </ScrollLink>
        <ScrollLink to='team' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
          <li className="py-5 text-center hover:bg-gray-200">Team</li>
        </ScrollLink>
        <li className="py-5 text-center hover:bg-gray-200">Our Products</li>
        <RouterLink to='/bloghome' onClick={handleNavClick}>
          <li className="py-5 text-center hover:bg-gray-200">Blogs</li>
        </RouterLink>
        <ScrollLink to='contactUs' smooth={true} duration={500} onClick={handleNavClick} offset={scrollOffset}>
          <li className="py-5 text-center hover:bg-gray-200">Contact Us</li>
        </ScrollLink>
      </ul>
    </div>
  );
};

export default NavBar;
