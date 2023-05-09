import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
    // const[setMenu,toggleMenu]=useState(false);
  return (
    
    < >
        <div className='navbar'>
            <div className="logo">
                <li><a href="/home"><span>Aditya Dixit</span></a></li>
            </div>
            <div className="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#button"><button id='btn'>Dark Mode</button></a></li>
            </div>
           
        </div>
        
    </>
  )
}

export default Navbar