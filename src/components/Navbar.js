import React from 'react';

export default function Navbar(props) {
  const logoStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
  };
  
  return (
    <nav className={`navbar navbar-expand-lg navabr-${props.mode} bg-${props.mode}`} style={{ border: '1px solid white' }}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#" style={logoStyle}>
          <img src="https://www.svgrepo.com/show/508435/flag-as.svg" alt="Your Logo" height="30" className="d-inline-block align-top me-2" />
          {props.title}
        </a>

        <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">{props.title}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="#">{props.home}</a>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/about">{props.about}</a>
            </li> */}
          </ul>
          <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
