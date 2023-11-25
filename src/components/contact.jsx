import React from "react";
import "./contact.css";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png"

export const Contact = (id) => {
    return (
        <div className="contact-section" id="contact">
            <div className="text-wrapper">Send me a message!</div>
            <div className="div">
                <div className="contact-info">
                    <div className="title-description">
                        <p className="p">Don't hesitate to contact me for further information!</p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/nguyenthihoailinh/"><img src={linkedin} alt="Image" className="image" /></a>
                        <a href="mailto:leslie.th.nguyen@gmail.com"><img src={gmail} alt="Image" className="image" /></a>
                    </div>
                </div>
                {/* <div className="contact-form">
                    <div className="input-fields">
                        <div className="first-row">
                            <input className="input-field-1" placeholder="Name"/>
                            <input className="input-field-2" placeholder="Email"/>
                        </div>
                        <input className="input-field-message" placeholder="Message"/>
                    </div>
                    <a href="a@gmail.com" className="button">
                        <div className="text-wrapper">Submit</div>
                    </a> */}
                {/* </div> */}
            </div>
        </div>
    )
}