// eslint-disable-next-line no-unused-vars
import { Container } from "@mui/material";
import React from "react";

const Formation = () => {
  return (
    <Container>
      <h2> Educational Background </h2>
      <hr />
      <div className="row gap-5">
        <div className="col-md-8">
          <h3>Degrees</h3>
          <div className="Degrees">
            <div className="degree">
              <h4> Bachelor's Degree in Software Engineering </h4>
              <h5> Universidad Tecnica Nacional</h5>
              <h6> 2023 — On Going</h6>
            </div>
            <div className="degree">
              <h4> Diploma in Information Technologies </h4>
              <h5> Universidad Tecnica Nacional</h5>
              <h6> 2021 — 2023</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h3>Certificates</h3>
          <div className="knowledge certificates">
            <h4> English C1 </h4>
            <h5> Duolingo</h5>
            <h6> 2021</h6>
          </div>
          <div className="knowledge certificates">
            <h4> JavaScript Algorithms and Data Structures </h4>
            <h5> freeCodeCamp</h5>
            <h6> 2023</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Formation;
