import React, { useContext, useRef, } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import toast from "react-hot-toast";

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();
        let name = form.current.user_name.value
        let email = form.current.user_email.value
        let message = form.current.message.value
        if (!name || !email || !message) {
            toast.error("Please include name, email and message to send the form.", { duration: 3000 })
            return
        }

        emailjs.sendForm('service_ybbsfrc', 'template_fipi78p', form.current, '--XOS3NIdkryobREt')
            .then((result) => {
                // console.log(result.text);
                // alert("form submitted")
                toast.success("Form submitted successfully!", { duration: 3000 })
                form.current.user_name.value = null
                form.current.user_email.value = null
                form.current.message.value = null
            }, (error) => {
                // console.log(error.text);
                // alert(error.text)
                toast.error("Oops! Failed to submit the form. Please try again later!", { duration: 3000 })
            });
    };

    return (
        <div className="contact-form" id="Contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={darkMode ? { color: "white" } : { color: "" }}>Get in Touch</span>
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