import PropTypes from "prop-types";
import React from "react";
import { SkillsCard } from "./skillcard";
import "./skill.css";

export const SkillsSection = ({className, id }) => {
  return (
    <div className={`skills-section ${className}`} id="skills">
      <div className="text-wrapper">SKILL SET</div>
      <div className="cards-section">
        <SkillsCard
          className="skills-card-instance"
          description={
            <>
              Programming languages: Python, SQL
              <br />
              Statistical Analysis:&nbsp;&nbsp;hypothesis testing, regression, clustering, etc
              <br />
              Machine Learning and AI:&nbsp;&nbsp;algorithms like decision trees, neural networks, SVMs, and deep
              learning frameworks (TensorFlow, Yolo)
            </>
          }
          divClassName="skills-card-3"
          property1="horizontal"
          title="Data Science"
          version="one"
        />
        <SkillsCard
          className="skills-card-instance"
          description={
            <>
              Data Manipulation and Cleaning: Experience with data cleaning, preprocessing, and manipulation using
              Pandas, NumPy
              <br />
              Data Visualisation: Matplotlib, Seaborn, Tableau
            </>
          }
          divClassName="skills-card-3"
          property1="horizontal"
          title="Data Analysis"
          version="two"
        />
      </div>
      <div className="div">
        <SkillsCard
          className="skills-card-5"
          description={
            <>
              Industry Knowledge: Understanding of the specific industry or field (finance, healthcare, automotive)
              <br />
              Business Acumen: Ability to translate data findings into actionable insights that benefit the business
            </>
          }
          divClassName="skills-card-3"
          property1="horizontal"
          title="Business Analysis"
          version="three"
        />
        <SkillsCard
          className="skills-card-5"
          description={
            <>
              Project Management: Skills in organizing, planning, and executing projects, setting timelines, and
              ensuring successful outcomes.
              <br />
              Decision-Making: Capable of making informed and data-driven decisions, even in ambiguous or complex
              situations.
            </>
          }
          divClassName="skills-card-3"
          property1="horizontal"
          title="Leadership"
          version="four"
        />
      </div>
    </div>
  );
};

SkillsSection.propTypes = {
  showButton: PropTypes.bool
};
