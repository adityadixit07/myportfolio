import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar/nav.css";
import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [showNav,setShowNav]=useState(false);
  const toggleNav=()=>{
    setShowNav(!showNav);
  }
  return (
    <nav>
      <div className="container">
        <div className="brand-name">
          <h1>Aditya Dixit</h1>
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          {
            showNav?<AiOutlineClose/>:<AiOutlineMenu/>
          }
        </div>
        <div className={`nav-elements ${showNav && 'active'}`}>       
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNav}>Home</NavLink>
            </li>
            <li>
              <NavLink to="about" onClick={toggleNav}>About</NavLink>
            </li>
            <li>
              <NavLink to="projects" onClick={toggleNav}>Project</NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={toggleNav}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="https://drive.google.com/file/d/1MmJIpCqbPnp114Lpcwvan3uIXq4U0R42/view?usp=sharing" target="_blank" onClick={toggleNav}>Resume</NavLink>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
