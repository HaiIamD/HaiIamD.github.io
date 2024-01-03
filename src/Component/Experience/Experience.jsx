import React from 'react';
import './Experience.css';
import CountUp from 'react-countup';
// Import Motion
import { motion } from 'framer-motion';
// Import varian
import { fadeIn } from '../../utils/variant';

function Experience() {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className="container d-flex flex-wrap justify-content-center mt-2 mb-2 text-center"
    >
      <div className="row  ">
        <h1 className="experience">Experience</h1>
        <div className="d-flex text-light ">
          <div className="col-4 d-grid ">
            <span className=" countdown">
              <CountUp className="angka" start={0} end={5} duration={7} />
              <span className="countdownicon">+</span>
            </span>
            <span className="countdowndesc">Project Done</span>
          </div>
          <div className="col-4 d-grid ">
            <div className="countdown">
              <CountUp className="angka" start={0} end={4} duration={6} />
              <span className="countdownicon">+</span>
            </div>
            <span className="  countdowndesc">Up Coming Project</span>
          </div>
          <div className="col-4 d-grid ">
            <span className=" countdown">
              <CountUp className="angka" start={0} end={8} duration={8} />
              <span className="countdownicon">+</span>
            </span>
            <span className="  countdowndesc">Technology</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
