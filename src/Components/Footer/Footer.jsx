import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        MD ASADUZZAMAN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100082207567670">
          <BsFacebook></BsFacebook>
        </a>
        <a href="">
          <BsInstagram></BsInstagram>
        </a>
        <a href="">
          <BsTwitter></BsTwitter>
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Asaduzzaman. all rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
