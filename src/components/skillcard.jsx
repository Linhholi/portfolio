import PropTypes from "prop-types";
import React from "react";
import "./skillcard.css";
import datascience from "../images/datascience.png"
import dataana from "../images/dataana.jpeg"
import business from "../images/business-analyst.jpeg"
import leader from "../images/leader.jpeg"

export const SkillsCard = ({
  description="",
  title = "Title",
  property1,
  className,
  version
}) => {
  let imageSource;

  // Choose the image source based on the version prop
  switch (version) {
    case "one":
      imageSource = datascience; 
      break;
    case "two":
      imageSource = dataana;
      break;
    case "three":
        imageSource = business; 
        break;
    default:
        imageSource = leader; 
    }
  return (
    <div className={`skills-card ${property1} ${className}`}>
      {property1 === "vertical" && (
        <div className="title-description">
          <div className="title">{title}</div>
          <p className="this-is-a-template">{description}</p>
        </div>
      )}

      {property1 === "horizontal" && (
        <>
        <div className="skills-card-icon">
          <img
              className="skills-card-icon-instance"
              src={imageSource}
              alt="Skill icon"
            />
        </div>
          
          <div className="div">
            <div className="text-wrapper">{title}</div>
            <p className="p">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

SkillsCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  property1: PropTypes.oneOf(["vertical", "horizontal"]),
  image: PropTypes.string,
  version: PropTypes.oneOf(["one", "two","three","four"]),
};