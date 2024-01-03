import React from 'react';
import './Header.css';
// Import Motion
import { motion } from 'framer-motion';
// Import varian
import { fadeIn } from '../../utils/variant';

function Header() {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.5 }}
      className="container mt-4 mb-3 header "
    >
      <div className="row">
        <div className=" col-sm-12 col-md-12 col-lg-6 h-right ">
          <img className="img-fluid  gambar" src="./header.jpg" alt="header" />
        </div>
        <div className=" col-sm-12 col-md-12 col-lg-6 pt-5 h-left ">
          <p className="Aboutme">About Me</p>
          <p className="nama">Dimas Toriq Sibarani</p>
          <p className="desc">
            I am an experienced full-stack developer proficient in the JavaScript ecosystem, with expertise spanning Node.js, Express.js, MongoDB, JavaScript,
            and React.js. My mastery of Node.js allows me to design and implement efficient backend solutions using Express.js and MongoDB as my preferred NoSQL
            database. In the realm of JavaScript, I exhibit skills in both functional and object-oriented programming, enabling the creation of clean, modular,
            and adaptable code. <br /> On the frontend, I specialize in React.js development, crafting responsive, dynamic, and visually appealing user
            interfaces. The seamless integration of compelling user interfaces with a robust backend is a hallmark of my capabilities. With a solid background
            in the software development life cycle, I possess the ability to lead projects from conceptualization to implementation. I am deeply passionate
            about staying abreast of the latest technological trends and continually enhancing my skills to deliver optimal tech solutions. With this
            background, I am poised to tackle software development challenges with creativity, intelligence, and profound technical expertise.
          </p>
          <p className="Contact">Contact </p>
          <div className="container text-center m-auto">
            <div className="row gap-1 column-gap-2 d-flex  contact-logo">
              <div className="col-4 col-sm-5 col-md-4 col-lg-5  logo  my-1">
                <a href="mailto:dimmts19@gmail.com">
                  <div className="p-1">
                    {' '}
                    <img src="./google.png" alt="" className="img-fluid logocontact" />
                  </div>
                </a>
              </div>

              <div className="col-4 col-sm-5 col-md-4 col-lg-5 logo  my-1 ">
                <a href="https://github.com/HaiIamD">
                  <div className="p-1">
                    {' '}
                    <img src="./github.png" alt="" className="img-fluid logocontact" />
                  </div>
                </a>
              </div>
              <div className="col-4 col-sm-5 col-md-4 col-lg-5 logo  my-1">
                <a href="https://www.instagram.com/dimmts_/">
                  <div className="p-1">
                    {' '}
                    <img src="./instagram.png" alt="" className="img-fluid logocontact" />
                  </div>
                </a>
              </div>
              <div className="col-4 col-sm-5 col-md-4 col-lg-5 logo  my-1">
                <a href="https://linkedin.com/in/dimas-toriq-sibarani-5277751bb">
                  <div className="p-1">
                    {' '}
                    <img src="./linkedin.png" alt="" className="img-fluid logocontact" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
