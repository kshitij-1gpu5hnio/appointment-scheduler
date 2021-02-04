import React from "react";
import "../styles.css";
import Base from "./Base";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Base
      title="Appointment Scheduler"
      desciption="A MERN Stack based Appointment Scheduler application."
      className="container"
    >
      <div className="row">
        <div className="col">
          <div className="card mb-4">
            <h4 className="card-header text-center">Author Information</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge badge-primary mr-2">Name:</span>
                Kshitij Bharde
              </li>
              <li className="list-group-item">
                <span className="badge badge-primary mr-2">Email:</span>
                kshitij.bharde@tutanota.com
              </li>
              <li className="list-group-item">
                <span className="badge badge-primary mr-2">Github:</span>
                <a href="https://github.com/kshitijBharde">https://github.com/kshitijBharde</a>
              </li>
              <li className="list-group-item">
                <span className="badge badge-primary mr-2">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/kshitijbharde/">https://www.linkedin.com/in/kshitijbharde/</a>
              </li>
              <li className="list-group-item">
                <span className="badge badge-primary mr-2">Contact No:</span>
                +918788807027
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;
