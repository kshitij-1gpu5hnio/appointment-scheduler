import React from "react";
import Menu from "./Menu.js";
import { Link } from "react-router-dom";

const Base = ({
  title = "My Title",
  desciption = "My description",
  className = "text-dark p-4",
  children,
}) => {

  return (
    <div>
      <Menu />

      <div className="jumbotron text-black text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{desciption}</p>
      </div>
      <div className={className}>{children}</div>

      <footer className="footer mt-auto py-3">
        <div className="container-fluid bg-dark text-white text-center py-3">
          <h4>If you got any questions, feel free to reach out!</h4>
          <Link to="/about" className="btn btn-primary btn-lg">About</Link>
        </div>
      </footer>
    </div>
  );
};

export default Base;
