import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';
import page from '../../assets/page.svg';

const PageNotFound = () => {
  return (
    <div className="notfoundpage">
        <img src={page} />
        <p>You are entering a wrong url please return to 
        <Link to="/">  Home</Link></p>
    </div>
  )
}

export default PageNotFound