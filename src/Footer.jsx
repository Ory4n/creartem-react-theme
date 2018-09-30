import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <a href="#"><span>C</span></a>
        </div>

        <div className="top-menu">
          <ul>
            <li className="active">
              <a href="#home-card">
                <span className="icon fas fa-home"></span>
                <span className="link">Home</span>
              </a>
              <small>Home</small>
            </li>
            <li>
              <a href="#about-card">
                <span className="icon fas fa-info"></span>
                <span className="link">About</span>
              </a>
            </li>
            <li>
              <a href="#resume-card">
                <span className="icon fas fa-question"></span>
                <span className="link">FAQ</span>
              </a>
            </li>
            <li>
              <a href="#works-card">
                <span className="icon fas fa-archive"></span>
                <span className="link">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#blog-card">
                <span className="icon fas fa-users"></span>
                <span className="link">Students</span>
              </a>
            </li>
            <li>
              <a href="#contacts-card">
                <span className="icon fas fa-envelope"></span>
                <span className="link">Contacts</span>
              </a>
            </li>
            <li>
              <a href="#resume-card">
                <span className="icon fas fa-box"></span>
                <span className="link">Privacy Policy</span>
              </a>
            </li>
          </ul>

        </div>



        <span className="menu-btn">
          <span className="m-line"></span>
        </span>
      </header>
    );
  }
}

export default Header;
