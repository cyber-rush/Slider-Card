import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './components/Card';
import team from './util/data';

const App = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-5xl bg-gradient-to-r from-teal-500 via-indigo-500 to-green-500 bg-clip-text text-transparent pb-4">
        Our IITian Team
      </h1>
      <div className="text-center text-xl text-white pt-4">
        A Team Of IITians to Boost your Tech Career to New Heights. The Curriculum Team is an experienced group of data analyst instructors
      </div>
      <div className="slider-container mt-16 mx-24">
        <Slider {...settings}>
          {team.map((educator) => (
            <div key={educator.id}>
              <Card educator={educator} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
