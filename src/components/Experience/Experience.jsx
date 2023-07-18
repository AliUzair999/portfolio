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
                <div className="circle">8+</div>
                <span style={darkMode ? { color: "white" } : { color: "" }}>Years</span>
                <span>Experience</span>
            </div>

            <div className="achievement">
                <div className="circle">20+</div>
                <span style={darkMode ? { color: "white" } : { color: "" }}>Project</span>
                <span>Completed</span>
            </div>

            <div className="achievement">
                <div className="circle">5+</div>
                <span style={darkMode ? { color: "white" } : { color: "" }}>Companies</span>
                <span>Worked</span>
            </div>


        </div>
    )
}

export default Experience
