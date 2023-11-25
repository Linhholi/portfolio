import React from "react";
import "./project.css";
import github from "../images/GitHub-logo.png";
import tableau from "../images/tableau.png";

export const Project = ({}) => {
  return (
    <div className="tech-skills">
      <div className="text-wrapper">PROJECTS</div>
      <a href="https://github.com/Linhholi"><img className="image" alt="Image" src= {github}/></a>
      <a href="https://public.tableau.com/app/profile/leslie.th.nguyen/"><img className="img" alt="Image" src={tableau} /></a>
    </div>
  );
};