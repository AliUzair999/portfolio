import React from "react";
import './Services.css'
import Card from "../Card/Card";


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
                        icon="basic"
                        heading="Basics"
                        detail="HTML, CSS, FLEX, SASS/SCSS, JAVASCRIPT"
                    />
                </div>

                {/* SECOND CARD */}
                <div style={{ top: "12rem" }}>
                    <Card
                        icon="front"
                        heading="Front-End"
                        detail="REACT JS, NEXT JS, REDUX, TAILWIND CSS, GATSBY"
                    />
                </div>

                {/* THIRD CARD */}
                <div style={{ top: "19rem", left: "20em" }}>
                    <Card
                        icon="back"
                        heading="Back-End "
                        detail="REST APIs, GRAPH QL, FIREBASE, MONGO DB, EXPRESS JS, NODE JS"
                    />
                </div>

            </div>
        </div>
    )
}

export default Services
