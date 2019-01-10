import {NavLink} from 'react-router-dom';
// import {FaHome} from 'react-icons/fa';
import {Route} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray",
};

export const MainMenu = () =>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a to="/" className="navbar-brand" href="#">MyCard</a>
    <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"
         id="navbarNavDropdown">
      <ul className="navbar-nav">
      {/*<li className="nav-item active">
        <NavLink to="/" className="nav-link">
          <FaHome/>
        </NavLink>
      </li>*/}
        <li className="nav-item">
          <NavLink to="/gallery"
                   activeStyle={selectedStyle}
                   className="nav-link">
                   [Gallery]
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <Route component={AboutMenu} />
        </li>
      </ul>
    </div>
  </nav>;


export const AboutMenu = ({match}) =>
  <div className="about-menu">
    <a className="nav-link dropdown-toggle"
       id="navbarDropdownMenuLink"
       data-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
       style={(match.url === "/about")? selectedStyle: {}}>
       [About]
    </a>
    <ul className="dropdown-menu p-2" 
        aria-labelledby="navbarDropdownMenuLink">
      <li>
        <NavLink to="/about"
                 style={(match.url === "/about"&&match.isExact)? selectedStyle: {}}>
                 [About]
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/contacts"
                 activeStyle={selectedStyle}>
                 [Contacts]
        </NavLink>
      </li>
    </ul>
  </div>

AboutMenu.propTypes = {
  match: PropTypes.object,
};
