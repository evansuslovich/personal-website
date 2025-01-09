import "./contact.scss";
import React, { useRef } from "react";
import { useSnackbar } from "notistack";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !process.env.REACT_APP_EJS_SERVICE_ID ||
      !process.env.REACT_APP_EJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EJS_PUBLIC_KEY
    ) {
      enqueueSnackbar(
        "Environment variables are undefined for sending emails",
        { variant: "error", autoHideDuration: 3000 }
      );
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EJS_SERVICE_ID,
        process.env.REACT_APP_EJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          enqueueSnackbar("Email Sent", {
            variant: "success",
            autoHideDuration: 3000,
          });
        },
        (error) => {
          enqueueSnackbar(error.text, {
            variant: "error",
            autoHideDuration: 3000,
          });
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact me!</h1>

      <div className="contact-me">
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            className="name"
            type="text"
            name="user_name"
            placeholder="First Name"
          />
          <input
            className="name"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          <input
            className="personal"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <input
            className="personal"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="message"
            type="text"
            name="message"
            placeholder="Message"
          />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
