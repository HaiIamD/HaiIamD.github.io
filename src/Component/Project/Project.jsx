import useState from 'react';
import './Project.css';
import CountUp from 'react-countup';
import data from '../../utils/project.json';

// Import Motion
import { motion } from 'framer-motion';
// Import varian
import { fadeIn } from '../../utils/variant';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className="container">
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}
        className="white-gradient"
      ></motion.div>
      <motion.div variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.5 }} className="d-grid headProject">
        <h1 className="mt-3 project">Project</h1>
        <span className="project2">My latest project </span>
        <span className="my-3 project3">
          Kindly explore the 'Project' section for an in-depth view of my ongoing project. There, you'll find comprehensive details, updates, and documentation.
          Your insights are invaluable, and I believe delving into the project specifics will provide clarity on its goals and progress. Feel free to reach out
          for any questions or further discussion. Thank you for your time and interest.
        </span>
      </motion.div>
      <div className="d-flex flex-wrap justify-content-center over">
        {data.map((datas) => (
          <motion.div
            variants={fadeIn('up', 0.9)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.8 }}
            className="col-md-5 col-xl-3 mx-3 my-3"
            key={datas.id}
          >
            <div className="card pt-3 px-3 cardUtama">
              <div className="row g-0">
                <div className="col-md-12 text-center">
                  <img src={datas.gambar[1]} className="img-fluid rounded-start gambarProject" alt="Gambar" />
                </div>
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title">{datas.title}</h5>
                    <p className="card-text besarCardDesc">{datas.desc}</p>
                    <p className="card-text d-flex justify-content-between align-items-center">
                      <span>
                        ❤️
                        <CountUp start={1000} end={datas.like} duration={3} />
                      </span>

                      <Link className="btn px-4 detail" to={`/${datas.id}`}>
                        Detail
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
