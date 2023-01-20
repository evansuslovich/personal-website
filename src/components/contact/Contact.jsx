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

            <form ref={form} onSubmit={sendEmail} className="form">
                <label>Name</label>
                <input className="name" type="text" name="user_name" placeholder="Name" />
                
                <label>Email</label>

                <input className="email" type="email" name="user_email" placeholder="Email" />
                
                <label>Message</label>
                <input className="message" type="text" name="message" placeholder="Message" />
                
                <input className="button" type="submit" value="Send" />
            </form>
        </div>
    );
};


