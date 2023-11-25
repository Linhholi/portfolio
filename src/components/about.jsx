import React from "react";
import ava from "../images/ava.jpg";
import "./about.css";

export const About = ({className, id }) => {
  return (
    <div className={`header-section ${className}`} id="about">
      <div className="header-content">
        <div className="title-subtitle">
          <p className="div">Data Scientist | Data Analyst</p>
          <div className="text-wrapper-2">LINH NGUYEN</div>
          <p className="p">
            Passionate about leveraging advanced analytics and cutting-edge techniques to extract meaningful insights
            from complex datasets.
          </p>
        </div>
        <a className="button-instance" href="#contact">
          <div className="text-wrapper">Contact</div>
        </a>
      </div>
      <img className="headerimage" alt="Headerimage" src={ava} />
    </div>
  );
};
