import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar  border-bottom siNavbar">
      <div className="container-fluid px-5">
        <a className="navbar-brand logoNavbar" href="#">
          <img src="./logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
        </a>
        <div>{props.children} </div>
      </div>
    </nav>
  );
}

export default Navbar;
