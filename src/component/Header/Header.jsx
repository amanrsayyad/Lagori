import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import lagori2 from '../../assets/lagori2.png';

const Header = () => {
  //scroll header logic
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  //header logic
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className={navbar ? 'header scroll' : 'header'}>
      <div className='header__left'>
        <Link to='/'>
          <img src={lagori2} alt='LOGO' className='header_logo' />
        </Link>
      </div>
      <div className='header_right'>
        <div className='header__icons'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <Link to='/' onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to='/Aboutus' onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to='/Gallery' onClick={closeMobileMenu}>
              Gallery
            </Link>
            <Link to='/Activities' onClick={closeMobileMenu}>
              Activities
            </Link>
            <Link to='/Explore' onClick={closeMobileMenu}>
              Explore
            </Link>
          </ul>
          <div className='menu_icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times x-icon' : 'fas fa-bars'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
