import React from "react";
import { GrNode } from "react-icons/gr";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiJavascript1, DiReact } from "react-icons/di";
import { MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import "../projects/card.css";
import moviebookiglive from "./imges/moviebookingliveapp.png";
import courseapp from "./imges/courseapp.png";
import micloneui from "./imges/micloneui.png";
const Card = () => {
  return (
    <>
      <div className="section">
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={moviebookiglive} alt="" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>MERN Stack Movie Booking app</h2>
              {/* <p>
                User Can seee thier booked movies,
                Only Admin can add the movies
               Used react-redux for state management
               User Authorisation
              </p> */}
              <ul className="project-description">
                <li>User Can seee thier booked movies</li>
                <li>Only Admin can add the movies</li>
                <li>Used react-redux for state management</li>
                <li>User Authorisation</li>
              </ul>
              <div className="icons">
                <DiJavascript1 />
                <FaReact />
                <GrNode />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://moviebookinglive.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/adityadixit07/moviebookinglive"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Github
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* second project */}
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={courseapp} alt="" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>MERN Stack Course App</h2>
              {/* <p>
                Backend App for a mern authentication built using NodeJS,
                Express, Mongoose and MongoDB Atlas. A solo
                project. CRUD operations for users authentication and logIn/logOut.
              </p> */}
              <ul className="project-description">
                <li>User can buy the listed course</li>
                <li>Admin can upload their courses</li>
                <li>Admin Dashboard is also avaliable</li>
              </ul>
              <div className="icons">
                {/* tech stack used in projects symbols  */}
                <DiJavascript1 />
                <FaReact />
                <GrNode />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://course-app-live.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/adityadixit07/Sell-Buy-Course"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Github
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* miclone  */}
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={micloneui}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>UI Clone MI in React.js</h2>
              <ul className="project-description">
                <li>Make the clone of mi website</li>
                <li>Used json data to fetch images and data</li>
                <li>Used react.js</li>
              </ul>

              <div className="icons">
                <DiJavascript1 />
                <MdCss />
                <TbJson/>
                <DiReact />
              </div>
              <div>
                <a
                  href="https://miclone-reactapp.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/adityadixit07/miclone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Github
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* third project */}
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/adityadixit07/quizapp/blob/main/quizview.png?raw=true"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Random Quiz App</h2>
              {/* <p>
                Created a quiz app using React.js. User can play the quiz and choices made for question category and  each time user get a new question.
              </p> */}
              <ul className="project-description">
                <li>Play Quiz on random fashion</li>
                <li>Everytime user get set of new multiple questions</li>
                <li>Used third party API for generating Questions</li>
              </ul>

              <div className="icons">
                <DiJavascript1 />
                <MdCss />
                <DiReact />
              </div>
              <div>
                <a
                  href="https://quizapp-in-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/adityadixit07/quizapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Github
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;
