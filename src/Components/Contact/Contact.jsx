import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lbw0gr",
        "template_3br7kft",
        form.current,
        "Z_HntjSpAOjHF9J58"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
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
            <MdOutlineMail className="contact_option_icon"></MdOutlineMail>
            <h4>Email</h4>
            <h5>asad.zaman2385@gmail.com</h5>
            <a
              href="mailto:asad.zaman2385@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon"></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Knock me in messenger</h5>
            <a
              href="https://m.me/profile.php?id=100082207567670"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="contact_option_icon"></ImWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+8801400284261</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01400284261"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name "
            required
          />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
