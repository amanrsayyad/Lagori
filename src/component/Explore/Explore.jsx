import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='explore'>
      <div className='explore_container'>
        <div className='explore_bg'></div>
        <div className='explore_card'>
          <li><i class="fa-solid fa-check"></i> Authentic Local Maharashtrian Food.</li>
          <li><i class="fa-solid fa-check"></i> Fish For Non-Veg Lovers.</li>
          <li><i class="fa-solid fa-check"></i> Place to reunite near & dear ones.</li>
          <li><i class="fa-solid fa-check"></i> Perfect destination for family & Corporate Getogethers.</li>
        </div>
      </div>
    </div>
  );
};

export default Explore;
