import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="assets/brand-logo.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/works" className="nav-link">Works</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <Link to="/blogsl/123" className="nav-link">Blog</Link>
              <Link to="/planner" className="nav-link ms-3">Planner</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
