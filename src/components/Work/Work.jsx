import React from "react";
import "./Work.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Guru from "../../img/guru.png"
import Freelancer from "../../img/freelancer.jpg"

import { Link } from "react-scroll";


import { themeContext } from '../../Context';
import { useContext } from 'react';

const Work = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="works" id="Work">
            <div className="awesome">
                <span style={darkMode ? { color: "white" } : { color: "" }}>Work With All These</span>
                <span>Brands & Clients</span>

                <span>
                    Whether it's integrating APIs, optimizing performance, or implementing modern development practices, I ensure your web projects are at the forefront of innovation. With my passion for creating exceptional user experiences and my dedication to delivering high-quality results, I am ready to bring your vision to life. Let's collaborate and build web solutions that make a lasting impact in the digital world.
                </span>


                <Link to="Contact" smooth={true} spy={true}>
                    <button className="button s-button" >Hire Me</button>

                </Link>


                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

            </div>

            {/* RIGHT SIDE */}

            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Guru} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Freelancer} alt="Upwork" />
                    </div>

                    {/* BACKGROUND CIRCLES */}

                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>

                </div>
            </div>

        </div>
    )
}

export default Work


