import React from "react";
import { MdExitToApp } from "react-icons/md";
import './about.css'
import myimg from './adityadixit.jpeg'

const About = () => {
  return (
    <div>
      <div className="heading">
      <h1>About Me</h1>
      </div>
      <div className="container">
        
        <div className="left">
          <div className="image" data-aos="zoom-in-right">
            <img  src={myimg}
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="descriptions" data-aos="zoom-in">
            <span>
              Tech enthusiast with a drive for innovation and problem-solving.
              Dedicated to expanding my knowledge and skills in the
              ever-evolving field of IT. Eager to leverage my education and
              experience to contribute to cutting-edge projects and make a
              positive impact in the world of technology
            </span>
          </div>
          <div className="interest">
            <span>Some of my interests :</span>
          </div>
          <div className="icons">
            <h4>
              <MdExitToApp /> Coding
            </h4>
            <h4>
              <MdExitToApp /> Problem Solving
            </h4>
            <h4>
              <MdExitToApp /> Reading Book
            </h4>
            <h4>
              <MdExitToApp />Teaching
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
