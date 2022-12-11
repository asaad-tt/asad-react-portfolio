import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="nav_sec">
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome></AiOutlineHome>
        </a>
        <a
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser></AiOutlineUser>
        </a>
        <a
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <BiBook></BiBook>
        </a>
        <a
          href="#experiences"
          onClick={() => setActiveNav("#experiences")}
          className={activeNav === "#experiences" ? "active" : ""}
        >
          <RiServiceFill></RiServiceFill>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail></BiMessageSquareDetail>
        </a>
        <Link to="/blog">
          <FaBloggerB></FaBloggerB>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
