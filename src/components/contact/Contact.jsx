import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sb6vbgs', 'template_7jnqowt', form.current, '3H7IpiokU9j2gqVPX')
    
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <br></br>
            <a href="mailto:barbaraelisabethb@gmail.com">Send a message by Email</a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <br></br>
            <a
              href="https://www.linkedin.com/in/barbaraebennett/?message"
              target="_blank"
              rel="noreferrer"
            >
              Send a message on LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <BiMessageDetail className="contact__option-icon" />
            <br></br>
            <a href="sms:+14076250747">Send a text message</a>
          </article>
          <article className="contact__option">
            <BiPhoneCall className="contact__option-icon" />
            <br></br>
            <a href="tel:+14076250747">Call me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
