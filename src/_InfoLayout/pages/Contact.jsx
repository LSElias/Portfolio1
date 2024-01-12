import { Container } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container className="contact ">
      <h2>
        {" "}
        If you wish to contact me
        <br /> you can do so through the following ways:
      </h2>
      <div className="row gap-0 pt-4">
        <div className="contact-card col-md-5">
          <h4>LinkedIn</h4>
          <FaLinkedin size={100} />
          <br />
          <br />
          <h5>
            You can message me on LinkedIn. I prioritize this way of contact, so
            I promise a quick response.
          </h5>
          <a
            href="https://www.linkedin.com/in/elrodguer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button> Get in touch</button>
          </a>
        </div>
        <div className="col-md-2"></div>
        <div className="contact-card col-md-5">
          <h4> Email </h4>
          <MdEmail size={100} />
          <br />
          <h5>
          If you prefer communication through emails, feel free to reach out using the address below. This email is dedicated to work-related topics, and you can expect a quick reply.
          </h5>
          <br />
          <h3 className="email"> rodguerelias@gmail.com</h3>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
