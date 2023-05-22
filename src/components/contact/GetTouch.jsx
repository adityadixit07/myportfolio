import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";
import "../contact/gettouch.css";
const GetTouch = () => {
  return (
    <>
      <div className="icon-container">
        <div className="icon_title">
          <h1>Get in Touch</h1>
        </div>
        <div className="icons-1">
          <a href="https://www.linkedin.com/in/adityakumardixit/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="mailto:officialadityadixit@gmail.com" target="_blank" rel="noreferrer">
            <HiOutlineMail />
          </a>
          <a href="https://www.instagram.com/adityadixit_70/?next=%2F" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://github.com/adityadixit07" target="_blank" rel="noreferrer">
            <RiGithubFill />
          </a>
        </div>
        <span className="footer-data">Made with ❤️ by Aditya Dixit</span>
      </div>
    </>
  );
};

export default GetTouch;
