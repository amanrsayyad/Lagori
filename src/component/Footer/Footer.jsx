import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import lagori2 from '../../assets/lagori2.png';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer_container'>
          <div className='footerLinks'>
            <img src={lagori2} alt='FOOTER' />
          </div>
          <div className='footerLinks'>
            <p>
              <span className='address'>Address</span>
              <br />
              199/AP, Phalni GP Shmbadi, Kas Pathar, Satara - 415013
            </p>
          </div>
          <div className='footerLinks'>
            <h2>Navigation</h2>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Aboutus'>About Us</Link>
            </li>
            <li>
              <Link to='/Gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/Explore'>Explore</Link>
            </li>
          </div>
          <div className='footerLinks'>
            <h2>Social Media</h2>
            <li>
              <Link to='/'>
                <i class='fab fa-instagram'></i> Instagram
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i class='fab fa-facebook-square'></i> Facebook
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i class='fab fa-youtube'></i> YouTube
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className='two_links'>
        <div>
          <h3 className='copy_h3'>Lagori Resort &copy;2022</h3>
        </div>
        <div>
          <a
            href='https://stylotech.in/'
            target='_blank'
            className='company_name'
            rel='norefrer'
          >
            Designed By: <span>StyloTech</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
