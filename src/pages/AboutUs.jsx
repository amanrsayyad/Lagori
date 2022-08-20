import React from 'react';
import New from '../pages/New';
import Aboutus from '../component/Aboutus/Aboutus';
import Footer from '../component/Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <New newH2='About Us'/>
      <Aboutus />
      <Footer />
    </div>
  )
}

export default AboutUs;