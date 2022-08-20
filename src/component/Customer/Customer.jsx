import React, {useEffect}  from 'react';
import './Customer.css';
import vasota1 from '../../assets/vasota1.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const Customer = () => {

   useEffect(() => {
      Aos.init({ duration: 1500 });
    }, []);

  return (
    <div className="customer">
        <div className="customer_container">
             <div className="customer_card">
                <img src={vasota1} alt="" />
                <div className="customer_img" data-aos="flip-down"></div>
             </div>
             <div className="customer_card">
                <ul>
                    <li data-aos="fade-up"><i class="fa-solid fa-check"></i> Trek lovers can plan Vasota fort adventure trek from Lagori.</li>
                    <li data-aos="fade-up"><i class="fa-solid fa-check"></i> Boating at shiv sagar Lake just 5km from <span className='lagori_font'>Lagori</span>.</li>
                    <li data-aos="fade-up"><i class="fa-solid fa-check"></i> Childhood games like TOPS, Marbles, Sack Race, 3 Leg Race, Badminton, Cricket ..</li>
                    <li data-aos="fade-up"><i class="fa-solid fa-check"></i> Place suited for Corporate meetings, trainings, recreational team activities.</li>
                    <li data-aos="fade-up"><i class="fa-solid fa-check"></i> Perfect venue for destination weddings.</li>
                    <li data-aos="fade-up"><i class="fa-solid fa-check"></i> Parking space for more than 30 four wheelers at a time.</li>
                </ul>
             </div>
        </div>
    </div>
  )
}

export default Customer;