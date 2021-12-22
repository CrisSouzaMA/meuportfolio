import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cristiane from '../assets/images/Cristiane.png';

export default class Navbar extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <Link className="navbar-brand" to="/">
            <img src={Cristiane} alt="" width="170" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}