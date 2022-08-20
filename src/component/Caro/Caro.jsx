import React from 'react';
import './Caro.css';
import Carousel from 'react-bootstrap/Carousel';
import resort1 from '../../assets/resort1.jpeg';
import resort2 from '../../assets/resort2.jpeg';
import resort3 from '../../assets/resort3.jpeg';
import resort4 from '../../assets/resort4.jpeg';
import resort5 from '../../assets/resort5.jpeg';
import bg from '../../assets/bg.jpg';

const Caro = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className='caro_up'>
          <img className='d-block w-100 caro_img' src={resort2} alt='' />
          <div className='caro_word'>
            <h2 className='caro_h2'>
              <span>Lagori ...</span>
            </h2>
            <p className='caro_para'>the Urban Nest</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100 caro_img' src={resort1} alt='' />
          <div className='caro_word'>
            <h2 className='caro_h2'>Nature, Childhood, Families & Nostalgia,  Bringing All together ...</h2>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100 caro_img' src={resort3} alt='' />
          <div className='caro_word'>
            <h2 className='caro_h2'>Lagori ...</h2>
            <p className='caro_para'>Resort In the Valley's</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100 caro_img' src={bg} alt='' />
          <div className='caro_word'>
            <h2 className='caro_h2'>
            Experience .. the Bliss Of Nature At Lagori
            </h2>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caro;
