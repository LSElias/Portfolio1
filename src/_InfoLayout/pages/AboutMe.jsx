// eslint-disable-next-line no-unused-vars
import { Container, Grid } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutMe = () => {
  return (
    <Container>
      <h1> ABOUT ME </h1>
      <hr />
      <div className="row gap-5 pt-4 ">
        <div className="col-md-7">
          <h3> Personal Information</h3>
          <h4 className="paragraph">
            {" "}
            Hello! My name is Elias Rodriguez, and I'm a 21 year old university
            student majoring in software engineer, based in Alajuela, Costa
            Rica.
            <br />
            <br /> On 2021, I began studying software engineering looking to learn and insert myself
            into this world. I've always been fascinated by the way
            computers work and how the applications behind them are developed, leading me to
            finding a new passion in software development. Particulary in web development.
            <br />
          </h4>
        </div>
        <div className="col-md-4 knowledge">
          <h3> I have knowledge on </h3>
          <h4> 
            <ul>
              <li>
                Javascript & Typescript
              </li>
              <li>
                React
              </li>
              <li>
                Angular 
              </li>
              <li>
                ASP.NET
              </li>
              <li>
                C# 
              </li>
              <li>
                Java 
              </li>
              <li>
                HTML & CSS 
              </li>
              <li>SQL</li>
              <li>Microsoft SQL & MySQL</li>
              <li>Node.JS </li>
            </ul>
            </h4>
        </div>


      </div>
    </Container>
  );
};

export default AboutMe;
