import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const logoStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
  };
  return (
      <nav className={`navbar navbar-expand-lg navabr-${props.mode} bg-${props.mode}`} style={{ border: '1px solid white' }}>
  <div className="container-fluid">
  <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/" style={logoStyle}>
          <img src="https://www.svgrepo.com/show/508435/flag-as.svg" alt="Your Logo" height="30" className="d-inline-block align-top me-2" />
          {props.title}
        </a>

    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`}  to="/about">{props.about}</Link>
        </li>
      
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>
   
  )
}





