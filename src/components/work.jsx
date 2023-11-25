import PropTypes from "prop-types";
import React from "react";
import "./work.css"
import { WorkCard } from "./workcard";

export const Work = ({sectionTitle="WORK EXPERIENCE"}, id) =>{
    return (
        <div className="gallery-section" id="work">
            <div className="work-experience">{sectionTitle}</div>
            <div className="cards-section">
                <WorkCard
                className="gallery-card-instance"
                description="Develop and train an advanced image segmentation machine-learning model tailored for a healthcare application, ensure seamless integration into front-end"
                title="Data Scientist"
                version="one"
                />
                <WorkCard
                className="gallery-card-instance"
                description="Bridge the gap between internal cross-functional teams and external clients within the banking sector, ensure smooth communication, client needs, and alignment of project goals to deliver effective solutions"
                title="Business Analyst"
                version="two"
                />
                <WorkCard
                className="gallery-card-instance"
                description="Identify operational inefficiencies, conduct thorough audits, and deliver actionable recommendations for enhancing organisational processses and integrity"
                title="Internal Auditor"
                version="three"
                />
                <WorkCard
                className="gallery-card-instance"
                description="Expertise in financial analysis, risk assessment, and compliance, ensure robust internal controls and regulatory adherence"
                title="Internal Auditor"
                version="four"
                />
                <WorkCard
                className="gallery-card-instance"
                description={
                    <>
                        Cost accountant
                        <br />
                        AP accountant"
                    </>
                }
                title="Accountant"
                version="five"
                />
                <WorkCard
                className="gallery-card-instance"
                />
            </div>
        </div>
    )
}

Work.propTypes = {
    sectionTitle: PropTypes.string,
}