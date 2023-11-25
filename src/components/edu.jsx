import React from "react";
import "./edu.css";
import swinburne from "../images/swinburne.png"
import ftu from "../images/ftu.webp"

export const Edu = (id) => {
    return (
        <div className="education" id="edu">
            <div className="row">
                <div className="column">
                    <img src={swinburne} alt="Image" className="image" />
                    <img src={ftu} alt="Img" className="img" />
                </div>
                <div className="column">
                    <p className="master-of-data">
                        <span className="text-wrapper">Master of Data Science</span>
                        <br />
                        <span className="span">
                        Relevant Coursework: Machine Learning, Data Visualization, Big Data, Data Science, Creating Web Applications
                        </span>
                    </p>
                    <p className="bachelor-of-finance">Bachelor of Finance and Banking</p>
                </div>
            </div>
        </div>

    )
}
