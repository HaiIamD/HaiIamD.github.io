import React from 'react';
import './Fotter.css';
import logos from '../../utils/footer.json';
// Import Motion
import { motion } from 'framer-motion';
// Import varian
import { fadeIn } from '../../utils/variant';

function Fotter() {
  return (
    <motion.div
      variants={fadeIn('up', 0.9)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.5 }}
      className="container border-top h-footer"
    >
      <div className="row">
        <div className="col-12 footer ">Find Me In</div>
        <div className="logos">
          {logos.map((logo, i) => (
            <div className="col-1 logou" key={i}>
              <a href={logo.link} className="gambarlogos">
                {' '}
                <img src={logo.image} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Fotter;
