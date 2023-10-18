import React from 'react'
import logo from "../Assets/logo.png";
import style from '../style/NavBar.module.css'
import { LuAlignJustify } from "react-icons/lu";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-light ${style.navbar}`}>
    <div className="container d-flex align-items-center">
        <Link className={`navbar-brand ${style.logo}`} to="/">
          <img src={logo} /> 
          <h1>Manba Finaserve</h1>
        </Link>
      <button
        className={`navbar-toggler ${style.toggleBtn}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <LuAlignJustify/>
      </button>
      <div
        className={`collapse navbar-collapse ${style.navBar_Collapse}`}
        id="navbarSupportedContent"
      >
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about us</Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/service">services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">contact us</Link>
        </li>
      </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default NavBar
