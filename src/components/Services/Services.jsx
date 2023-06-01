import React from "react";
import './Services.css'
import Card from "../Card/Card";


import heartemoji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Resume from "./Ali Uzair - CV.pdf"

import { themeContext } from '../../Context';
import { useContext } from 'react';



const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="services" id="Skills">
            {/* Left Side */}
            <div className="awesome">
                <span style={darkMode ? { color: "white" } : { color: "" }}>My Awesome</span>
                <span>Skills</span>

                <span>
                    With my expertise in the MERN stack and complementary skills, I am equipped to  tackle any web development challenge with finesse. I am dedicated to  staying up-to-date with the latest trends and technologies, ensuring that your web projects are built with cutting-edge solutions.
                </span>

                <a href={Resume} download>
                    <button className="button s-button" >Download CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

            </div>

            {/* Left Side */}
            <div className="cards">
                <div style={{ left: "20em" }}>
                    <Card
                        emoji={humble}
                        heading="Basics"
                        detail="HTML, CSS, FLEX, BOOTSTRAP, JAVASCRIPT"
                    />
                </div>

                {/* SECOND CARD */}
                <div style={{ top: "12rem" }}>
                    <Card
                        emoji={glasses}
                        heading="Front-End"
                        detail="REACT JS, REACT NATIVE, NEXT JS, VUE JS"
                    />
                </div>

                {/* THIRD CARD */}
                <div style={{ top: "19rem", left: "20em" }}>
                    <Card
                        emoji={heartemoji}
                        heading="Back-End "
                        detail="FIREBASE, MONGODB, EXPRESS.JS, NODE.JS"
                    />
                </div>

            </div>
        </div>
    )
}

export default Services
