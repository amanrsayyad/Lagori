import React, {useEffect}   from 'react';
import './Aboutus.css';
import resort3 from '../../assets/resort3.jpeg';
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='aboutus'>
        <div className="about_container">
            <div className="about_card" data-aos="fade-up">
                <h2>About Lagori</h2>
                <h2>Resort</h2>
                <p>When people come together beautiful thoughts, stories are woven. <br />With this in mind, we, Ganadhish group, came together to built up a nostalgic story around our childhood, that bloomed the idea of Lagori the urban nest. <br/>At, <span className='lagori_font'>Lagori</span> you come with your families, friends, colleagues,  besties & recreate your childhood stories again ..</p>
            </div>
            <div className="about_card" data-aos="fade-up">
                <img src={resort3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Aboutus;