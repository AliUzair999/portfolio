import React from "react";
import './Footer.css'
import Wave from "../../img/wave.png"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
import { UilPhoneAlt } from '@iconscout/react-unicons'

const Footer = () => {

    return (
        <div className="footer">

            <img src={Wave} alt="Wave" style={{ width: "100%" }} />
            <div className="f-content">
                <span>
                    <a href="mailto:aliuzaircss@gmail.com">
                    aliuzaircss@gmail.com
                    </a>
                </span>
                <div className="f-icons">
                    <a href="https://github.com/AliUzair999" target="_blank" rel="noreferrer">
                        <Github color='white' size='3rem' />
                    </a>
                    <a href="https://www.linkedin.com/in/ali-uzair/" target="_blank" rel="noreferrer">
                        <Linkedin color='white' size='3rem' />
                    </a>
                    <a href="tel:+923412445322" target="_blank" rel="noreferrer">
                        <UilPhoneAlt color='white' size='3rem' />
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Footer








