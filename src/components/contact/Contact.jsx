import "./contact.scss"
import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_37xv1ye', 'template_ong9vze', form.current, 'YYMYljATc_h9nzCRv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact" id="contact">


            <h1>Contact me!</h1>


            <div className="contact-me">

                <form ref={form} className="form">

                    <input className="name" type="text" name="user_name" placeholder="First Name" />
                    <input className="name" type="text" name="last_name" placeholder="Last Name" />
                    <input className="personal" type="email" name="user_email" placeholder="Email" />
                    <input className="personal" type="text" name="subject" placeholder="Subject" />
                    <textarea className="message" type="text" name="message" placeholder="Message" />
                    <input className="button" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};


