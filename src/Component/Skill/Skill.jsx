import React from 'react';
import './Skill.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../../utils/common';
import logo from '../../utils/slider.json';
// Import Motion
import { motion } from 'framer-motion';
// Import varian
import { fadeIn } from '../../utils/variant';

function Skill() {
  return (
    <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.5 }} className="container  my-5">
      <div className="row p-5 kotakskill">
        <div className="col-md-12 col-lg-3 ">
          <div className="text-center skill">skill.</div>
        </div>
        <div className="col-md-12 col-lg-9 pt-5 ">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {logo.map((logos, i) => (
              <SwiperSlide key={i}>
                <div className="srr  ">
                  <div className="d-grid text-center p-3 swiperr ">
                    <img src={logos.image} alt="" className="img-fluid gambarSkill " />
                    <span className="">
                      <span className="textSkill">{logos.name}</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="text-end px-4">
      <button
        className="px-4 py-2 mx-2 mt-3  prev"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        className="px-4 py-2 mx-2 mt-3  prev"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};
