import React from 'react';
import './Tourism.css';
import New from '../../pages/New';
import { Link } from 'react-router-dom';
import TourismSection from './TourismSection';
import bamnoli from '../../assets/bamnoli.jpg';
import kas from '../../assets/kas.jpg';
import Vasota from '../../assets/Vasota.jpg';
import toseghar from '../../assets/toseghar.jpg';

const Tourism = () => {
  return (
    <div>
        <New newH2="Explore"/>
        <TourismSection />
        <div className="blog">
        <h2>Places To Explore Nearby</h2>
        <div className="blog_container">
          <div className="blog_card">
            <Link to="/">
              <img
                src={toseghar}
                alt=""
              />
              <div className="blog_overlay">
                <h4>Thoseghar</h4>
              </div>
            </Link>
          </div>
          <div className="blog_card">
            <Link to="/">
              <img
                src={bamnoli}
                alt=""
              />
              <div className="blog_overlay">
                <h4>Bamnoli</h4>
              </div>
            </Link>
          </div>
          <div className="blog_card">
            <Link to="/">
              <img
                src={kas}
                alt=""
              />
              <div className="blog_overlay">
                <h4>Kaas Pathar</h4>
              </div>
            </Link>
          </div>
          <div className="blog_card">
            <Link to="/">
              <img
                src={Vasota}
                alt=""
              />
              <div className="blog_overlay">
                <h4>Vasota Fort</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tourism;