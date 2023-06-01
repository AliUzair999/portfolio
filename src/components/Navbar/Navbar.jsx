import React from "react";
import Toggle from "../Toggle/Toggle.jsx"
import "./Navbar.css"
import { Link } from "react-scroll"

const Navbar = () => {

    //FIXED NAVBAR
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".n-wrapper")
        header.classList.toggle("active", window.scrollY > 80)
    })


    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    AU
                </div>
                <Toggle />
            </div>


            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link activeClass="activeClass" smooth={true} to="Intro" spy={true}>
                            <li>Home</li>
                        </Link>
                        <Link smooth={true} to="Skills" spy={true}>
                            <li>Skills</li>
                        </Link>
                        <Link smooth={true} to="Experience" spy={true}>
                            <li>Experience</li>
                        </Link>
                        <Link smooth={true} to="Work" spy={true}>
                            <li>Work</li>
                        </Link>
                        <Link smooth={true} to="Portfolio" spy={true}>
                            <li>Portfolio</li>
                        </Link>

                    </ul>
                </div>
                <Link smooth={true} to="Contact" spy={true}>
                    <button className="button n-button" >
                        Contact
                    </button>
                </Link>

            </div>
        </div>

    )
}

export default Navbar

