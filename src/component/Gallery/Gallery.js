import React from 'react';
import './Gallery.css';
import New from '../../pages/New';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img9.jpeg';
import img10 from '../../assets/img10.jpeg';
import img11 from '../../assets/img11.jpeg';
import img12 from '../../assets/img12.jpeg';
import resort1 from '../../assets/resort1.jpeg';
import resort2 from '../../assets/resort2.jpeg';
import resort3 from '../../assets/resort3.jpeg';
import resort4 from '../../assets/resort4.jpeg';
import resort5 from '../../assets/resort5.jpeg';
import resort6 from '../../assets/resort6.jpeg';
import resort7 from '../../assets/resort7.jpeg';
import resort8 from '../../assets/resort8.jpeg';
import resort9 from '../../assets/resort9.jpeg';

const Gallery = () => {
  return (
    <div>
      <New newH2='Gallery' />
      <div class='image-gallery'>
        <div class='image-box'>
          <img src={resort1} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort2} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort3} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort4} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort5} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort6} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img3} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img2} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img1} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img4} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img12} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img6} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img7} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img9} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img8} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img10} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img11} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={img5} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort7} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort8} alt='img.jpg' />
        </div>
        <div class='image-box'>
          <img src={resort9} alt='img.jpg' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
