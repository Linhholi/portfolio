import PropTypes from "prop-types";
import React from "react";
import "./workcard.css"
import itc from "../images/itc-logo.png";
import premium from "../images/pt.png";
import vinfast from "../images/vinfast.png";
import lg from "../images/LG.png";
import toy from "../images/toyota.png";
import white from "../images/white.jpg";
import azure from "../images/azure.png";
import hacker from "../images/hackerrank.png";
import kpmg from "../images/kpmg.png";


export const WorkCard = ({title, description, version, className}) => {
    let imageSource;

  // Choose the image source based on the version prop
  switch (version) {
    case "one":
      imageSource = itc; 
      break;
    case "two":
      imageSource = premium;
      break;
    case "three":
        imageSource = vinfast; 
        break;
    case "four":
        imageSource = lg; 
        break;
    case "five":
        imageSource = toy; 
        break;
    case "azure":
        imageSource = azure; 
        break;
    case "hacker":
        imageSource = hacker; 
        break;
    case "kpmg":
        imageSource = kpmg; 
        break;
    default:
        imageSource = white; 
    }
    return (
        <div className={`gallery-card ${version} ${className}`}>
            <img 
                className="image" 
                alt="Image"
                src={imageSource}
                />
            <div className="title-description">
                <div className="project-title">{title}</div>
                <div className="UI-art-drection">{description}</div>
            </div>
        </div>
        
    )
}
WorkCard.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    version: PropTypes.oneOf(["one", "two","three","four","five"]),
  };