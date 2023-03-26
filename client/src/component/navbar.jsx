import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brand Name</a>
        <button className="navbar-toggler" type="button" onClick={handleToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/">home</Link>            
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">about</Link>            
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">login</Link>            
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">contact</Link>            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
