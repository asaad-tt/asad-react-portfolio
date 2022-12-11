import React from "react";
import CTA from "./CTA";
import "./Header.css";
import me from "../../assests/mePic/me-asad.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>MD ASADUZZAMAN</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>

        <div className="me">
          <img className="me_ok" src={me} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
