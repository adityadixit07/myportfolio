import React from "react";
import { GrNode } from "react-icons/gr";
import { SiExpress, SiMongodb } from "react-icons/si";
import {DiJavascript1,DiReact} from 'react-icons/di'
import {MdCss} from 'react-icons/md'
import '../projects/card.css'
const Card = () => {

  return (
    <>
   
      <div className="section">
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SymRNBPC3Xq9UzS-X8NKkg.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Rest API contact Manager APP</h2>
              <p>
                Backend API for a contact management built using NodeJS,
                Express, Mongoose and MongoDB Atlas. A solo
                project. CRUD operations for users, number updataion and deletion.
              </p>
              <div className="icons">
                {/* tech stack used in projects symbols  */}
                <DiJavascript1/>
                <MdCss/>
                <GrNode />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://github.com/adityadixit07/Rest-apiContactManager"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/adityadixit07/Rest-apiContactManager"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* second project */}
           <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-I_3xoEpTcNqT-4W7CZJMw.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mern Authentication App</h2>
              <p>
                Backend App for a mern authentication built using NodeJS,
                Express, Mongoose and MongoDB Atlas. A solo
                project. CRUD operations for users authentication and logIn/logOut.
              </p>
              <div className="icons">
                {/* tech stack used in projects symbols  */}
                <DiJavascript1/>
                <MdCss/>
                <GrNode />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://github.com/adityadixit07/User-authentication-mern"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Live Demo
                  </span>
                </a>
                <a
                  href="https://github.com/adityadixit07/User-authentication-mern"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
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
              <p>
                Created a quiz app using React.js. User can play the quiz and choices made for question category and  each time user get a new question.
              </p>
              <div className="icons">
                {/* tech stack used in projects symbols  */}
                <DiJavascript1/>
                <MdCss/>
                {/* <GrNode /> */}
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
                <DiReact/>
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
                    View Code
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
