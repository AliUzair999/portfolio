import React, { useContext, useRef, } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';


const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  
    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gjwzt16', 'template_fipi78p', form.current, 'PqpNo6_W_azN00qIF')
            .then((result) => {
                console.log(result.text);
                alert("form submitted")
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });
    };

    return (
        <div className="contact-form" id="Contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={darkMode ? {color:"white"} : {color:""}}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />

                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;