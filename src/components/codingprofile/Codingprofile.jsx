import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import "../codingprofile/codingprofile.css";

const Codingprofile = () => {
  return (
    <div className="coding-links">
      <a href="github.com">
        <SiLeetcode />
      </a>
      <a href="github.com" target="__blank">
        <FaHackerrank />
      </a>
    </div>
  );
};

export default Codingprofile;
