import './Showproject.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link
import data from '../utils/project.json';

function Showproject() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const project = data.find((item) => item.id === projectId);

  if (!project) {
    return <div>No project found for id: {id}</div>;
  }

  return (
    <div className="">
      <div className="container p-5 mt-5 HeadShow">
        <div className="row mt-5 besar   ">
          <div className="col-12 col-xl-12 col-xxl-5 me-5" bg-success>
            <h2 className="Title">{project.title}</h2>
            <p className="tech">Technology</p>
            <div className="row kotak">
              {project.technology.map((data) => (
                <div className="col-2 image my-1">
                  <img className="img-fluid imagegambar" src={data} alt="" />
                </div>
              ))}
            </div>
            <p className="btn Github">
              {' '}
              <a href={project.github} className="GithubCode">
                Github Code
              </a>
            </p>
            <p className="descDetail">{project.desc}</p>
            <Link to={'/'} className="btn another">
              {' '}
              SEE MORE PROJECT ...
            </Link>
          </div>
          <div className="col-12 col-xl-12 col-xxl-6  " bg-success>
            <div className="row">
              <div className="col-12 mb-3 ">
                <img src={project.gambar[2]} className="img-fluid rounded-4 gambarbesar" alt="" />
              </div>
              <div className="col-6 ">
                <img src={project.gambar[1]} className="img-fluid rounded-4 gambarbesar" alt="" />
              </div>
              <div className="col-6 ">
                <img src={project.gambar[0]} className="img-fluid rounded-4 gambarbesar" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showproject;
