import React from "react";
import './Card.css'
import { FaLaptopCode, FaServer, FaCode } from "react-icons/fa"
import { Link } from "react-scroll"

const Card = ({ emoji, heading, detail, icon, }) => {
    const iconToDisplay = (icon) => {
        const size = 50
        const color = "var(--orange)"
        switch (icon) {
            case "basic":
                return <FaCode size={size} style={{ color: color }} />
            case "front":
                return <FaLaptopCode size={size} style={{ color: color }} />
            case "back":
                return <FaServer size={size} style={{ color: color }} />
            default:
                return <FaCode size={size} style={{ color: color }} />
        }

    }
    return (
        <div className="card">
            {/* <img src={emoji} alt="" /> */}
            {iconToDisplay(icon)}
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">
                <Link smooth={true} to="Portfolio" spy={true}>
                    LEARN MORE
                </Link>
            </button>

        </div>
    )
}

export default Card

