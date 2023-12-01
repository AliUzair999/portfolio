import React from "react";
import './Intro.css'

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Facebook from '../../img/Facebook.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
// import boy from '../../img/boy.png'
import uzi from '../../img/uzi.png'

// import thumbup from '../../img/thumbup.png'
// import Crown from '../../img/crown.png'
// import glassesimoji from '../../img/glassesimoji.png'
// import FloatinDiv from "../FloatinDiv/FloatinDiv";

import { themeContext } from '../../Context';
import { useContext } from 'react';

// import { Link } from "react-scroll"

import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className="intro" id="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={darkMode ? { color: "white" } : { color: "" }}>Hey! This Is Ali Uzair</span>
                    <span style={darkMode ? { color: "white" } : { color: "" }} >I am a&nbsp;<Typewriter
                        words={['MERN Stack Developer', 'Passionate Coder', 'Mobile App  Dev', 'Web Engineer']}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></span>
                    <span>With a blend of artistry and technical prowess, I transform your visions into visually stunning and highly functional web apps. I thrive on pushing the boundaries of creativity and seamlessly blending it with cutting-edge technology. </span>
                </div>
                <a href="tel:+923412445322" target="_blank" rel="noreferrer">
                    <button className="button i-button">Let's Talk</button>
                </a>

                <div className="i-icons">
                    <a href="https://github.com/AliUzair999" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ali-uzair/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="https://www.facebook.com/AliUzairFB" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Facebook" style={{ color: "var(--orange)" }} />
                    </a>
                </div>


            </div>


            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={uzi} alt="boy" id="profile-pic" />
                {/* <img src={glassesimoji} alt="glassesimoji" /> */}

                {/* <div style={{ top: "-4%", left: "68%" }}>
                    <FloatinDiv image={Crown} txt1="Web" txt2="Developer" />
                </div>
                <div style={{ top: "18rem", left: "2rem" }}>
                    <FloatinDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </div> */}

                {/* Blur Div */}

                {/* <div className="blur" style={{ background: "rgb (238 210 255)" }}></div> */}

                <div className="blur" style={{
                    background: "#C1F5FF",
                    top: "17rem",
                    width: "22rem",
                    height: "11rem",
                    left: "-12rem"
                }}></div>
            </div>
        </div>
    )
}

export default Intro

