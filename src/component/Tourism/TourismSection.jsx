import React, {useEffect} from 'react';
import './Tourism.css';
import nature from '../../assets/nature.svg';
import Aos from "aos";
import "aos/dist/aos.css";

const TourismSection = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='tourism'>
      <div className='tourism_container'>
        <div className='tourism_card' data-aos="fade-right">
          <li className='tourism_heading'>
          <i class="fa-solid fa-check"></i>
          On the way to <span className='lagori_font'>Lagori</span>, you can explore nature at it's best, unfolding diversity every minute of your journey.
          </li>
          <li className='tourism_heading'>
          <i class="fa-solid fa-check"></i>
          The 30 km stretch to <span className='lagori_font'>Lagori</span> from Satara witnesses 4 dams .. Kanher, Urmodi, Kaas, Shivsagar/Koyna.
          </li>
          <li className='tourism_heading'>
          <i class="fa-solid fa-check"></i>
          20 mins from <span className='lagori_font'>Lagori</span> you can explore Vajrai & Ekiv waterfalls, enjoying the monsoon in it's true sense.
          </li>
        </div>
        <div className='tourism_card' data-aos="fade-right">
          <img src={nature} alt='' className='tourism_img' />
        </div>
      </div>
    </div>
  );
};

export default TourismSection;
