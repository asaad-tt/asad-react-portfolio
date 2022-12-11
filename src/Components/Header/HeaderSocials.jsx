import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/md-asaduzzaman-56ba55257/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/asaad-tt" target="_blank" rel="noreferrer">
        <FaGithub></FaGithub>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100082207567670"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook></BsFacebook>
      </a>
    </div>
  );
};

export default HeaderSocials;
