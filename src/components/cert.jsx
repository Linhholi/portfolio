import PropTypes from "prop-types";
import React from "react";
import "./work.css"
import { WorkCard } from "./workcard";

export const Certificate = ({sectionTitle="CERTIFICATE"}, id) =>{
    return (
        <div className="gallery-section" id="cert">
            <div className="work-experience">{sectionTitle}</div>
            <div className="cards-section">
                <WorkCard
                className="gallery-card-instance"
                title="Microsoft Azure Fundamentals"
                version="azure"
                />
                <WorkCard
                className="gallery-card-instance"
                title="HackerRank SQL Advanced"
                version="hacker"
                />
                <WorkCard
                className="gallery-card-instance"
                title="Data Analytics Consulting Virtual Internship"
                version="kpmg"
                />
            </div>
        </div>
    )
}

Certificate.propTypes = {
    sectionTitle: PropTypes.string,
}