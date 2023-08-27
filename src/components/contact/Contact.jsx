import React, { useRef } from "react";
import "./contact.css";

import { IoLogoTwitter } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        e.target.reset();
        alert("message sent !!");
      },
      (error) => {
        console.log("error", error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiFillLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Siddhant</h5>
            <a href="https://linkedin.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <IoLogoTwitter className="contact_option-icon" />
            <h4>Twitter</h4>
            <h6>@Siddhan97115645</h6>
            <a href="https://twitter.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>7080740634</h5>
            <a
              href="https://api.whatsapp.com/send?=+919519003091"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="name" required />

          <input type="email" name="email" placeholder="email" required />

          <input type="text" name="subject" placeholder="subject" required />

          <textarea
            name="message"
            rows="7"
            placeholder="message.."
            required
          ></textarea>

          <button
            style={{ marginInline: "auto" }}
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
