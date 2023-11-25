import React from "react";
import "./tech.css";
import python from "../images/python.png";
import sql from "../images/sql.png";
import api from "../images/api.png";
import react from "../images/react.png";

export const TechSkills = () => {
  return (
    <div className="tech-skills">
      <img className="image" alt="python" src= {python}/>
      <img className="image" alt="sql" src= {sql}/>
      <img className="image" alt="api" src= {api}/>
      <img className="image" alt="api" src= {react}/>
    </div>
  );
};