import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import "../header/header.css";
import Typewriter from "typewriter-effect";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiFillFileText
} from "react-icons/ai";
import {IoIosArrowDown} from 'react-icons/io'
import {HiGlobeAsiaAustralia} from 'react-icons/hi2'
import {MdEmail} from 'react-icons/md'
import { useEffect } from "react";
import Heading from '../heading/Heading'
import Project from "../projects/Project";
import About from "../about/About";
import GetTouch from "../contact/GetTouch";
const Header = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <header className="header">
      <div className="name" data-aos="zoome-out">
        <h1  data-aos="fade-right">
          HI✋,I'm  <span>Aditya Kumar Dixit</span>{" "}
        </h1>
      </div>
      <div className="typewriter-text-1">
        <span> I am a Passionate</span>
      </div>
      <div className="typewriter-text-2">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Problem Solver",
              "UI/UX designer",
              "Public Speaker",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="description" data-aos="zoom-in">
        <span>
        I am 4th-year B.Tech student in Information Technology. Tech enthusiast with a passion <br /> for innovation  and problem-solving. Ready to make a mark in the <br />world of technology and drive impactful projects. Let's revolutionize together!
        </span>
      </div>
      <div className="icons" data-aos="fade-up">
        <a href="https://github.com/adityadixit07" target="_blank" rel="noreferrer"><span> <AiFillGithub /></span></a>
        <a href="https://www.linkedin.com/in/adityakumardixit/" target="_blank" rel="noreferrer"><span><AiFillLinkedin /></span></a>
        <a href="mailto:officialadityadixit@gmail.com" target="_blank" rel="noreferrer"><span><MdEmail/></span></a>
        <a href="https://drive.google.com/file/d/1YfrSLh7UakSM23l-ixlondOQ1rk3AdTV/view?usp=drivesdk" target="_blank" rel="noreferrer"><span><AiFillFileText/></span></a>
        <a href="https://adityadixit.onrender.com/" target="_blank"rel="noreferrer" ><span><HiGlobeAsiaAustralia/></span></a>
        
      </div>
      <div className="buttons">
        <a href="https://drive.google.com/file/d/1EKiYNnHJfC8Hd8dBLoV-fp98DVryMmwR/view?usp=sharingg" target="_blank" rel="noreferrer"><button className="btns">Resume</button></a>
        <a href="https://github.com/adityadixit07" target="_blank" rel="noreferrer"><button className="btns" to="/projects">Projects<AiOutlineArrowRight/></button></a>
          
      </div>
    <div className="down-arrow">
        < IoIosArrowDown/>
    </div>
    <About/>
    <Heading text="Projects" />
    <Project/>
    <GetTouch/>
    </header>
  );
};
export default Header;
