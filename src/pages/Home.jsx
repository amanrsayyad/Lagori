import React from 'react';
import Aboutus from '../component/Aboutus/Aboutus';
import Customer from '../component/Customer/Customer';
import Explore from '../component/Explore/Explore';
import Hero from '../component/Hero/Hero';
import Footer from '../component/Footer/Footer';
import Aminities from '../component/Aminities/Aminities';
import Caro from '../component/Caro/Caro';

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Caro />
      <Explore />
      <Aboutus />
      <Aminities />
      <Customer />
      <Footer />
    </>
  )
}

export default Home;