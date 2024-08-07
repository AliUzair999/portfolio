import React from "react";
import './Experience.css'

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="experience" id="Experience">
            <div className="achievement">
                <div className="circle">2+</div>
                <span style={darkMode ? { color: "white" } : { color: "" }}>Years</span>
                <span>Experience</span>
            </div>

            <div className="achievement">
                <div className="circle">18+</div>
                <span style={darkMode ? { color: "white" } : { color: "" }}>Projects</span>
                <span>Completed</span>
            </div>

            <div className="achievement">
                <div className="circle">3+</div>
                <span style={darkMode ? { color: "white" } : { color: "" }}>Companies</span>
                <span>Worked</span>
            </div>


        </div>
    )
}

export default Experience
