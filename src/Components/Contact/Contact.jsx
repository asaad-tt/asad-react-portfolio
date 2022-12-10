import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail></MdOutlineMail>
            <h4>Email</h4>
            <h5>asad.zaman2385@gmail.com</h5>
            <a href="mailto:asad.zaman2385@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Knock me in messenger</h5>
            <a href="https://m.me/profile.php?id=100082207567670">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp></ImWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+8801400284261</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801400284261">
              Send a message
            </a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
