// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import IconBxlReact from "../components/UI/ReactSVG";
import IconBxlAngular from "../components/UI/AngularSVG";
import IconJs_badge from "../components/UI/JavaSciprtSVG";
import IconHtml5 from "../components/UI/HTML";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

function MainLayout() {
  return (
    <>
      <div className="InsidePage">
        <div className="InsideBox">
          <div className="Title">
            <h1>Software Engineer</h1>
            <h2>Elias Rodriguez</h2>
            <br />
            <div className="but-holder">
            <a 
            href='/ResumeElias.pdf'
            download={"Elias-Rodriguez-Resume"}
            target="_blank"
            rel="noopener noreferrer">
            <button >
              {" "}
              <FaFileDownload /> Resume{" "}
            </button>
            </a>
            <a
            href="https://github.com/LSElias"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button>
              {" "}
              <FaGithub /> Github{" "}
            </button>
            </a>
            </div>
          </div>
          <div className="MenuMP">
            <ul>
              <li>
                <Link className="link" to="/about-me">
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link className="link" to={"/formation"}>
                  Formation
                </Link>
              </li>
              <li>
                <Link className="link" to={"/projects"}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link" to={"/contact"}>
                  Contact me!
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>

        <div className="icons">
          <IconBxlReact />
          <IconBxlAngular />
          <IconJs_badge />
          <IconHtml5 />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
