import React, {useEffect} from 'react';
import './Aminities.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Aminities = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='service'>
      <div>
        <div className='service_container'>
          <div className='card_service' data-aos="fade-down">
          <i class="fa-solid fa-sailboat"></i>
            <h3>Explore</h3>
          </div>
          <div className='card_service' data-aos="fade-down">
          <i class="fa-solid fa-dice"></i>
            <h3>Indoor & Outdoor Games</h3>
          </div>
          <div className='card_service' data-aos="fade-down">
          <i class="fa-solid fa-handshake"></i>
            <h3>Meetings & Programs</h3>
          </div>
          <div className='card_service' data-aos="fade-down">
          <i class="fa-solid fa-car-side"></i>
            <h3>Resort Parking</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aminities;
