import React from "react";
import "./ProjectOne.css";
import img1 from "../../../assests/ProjectScreen/AE/sc1.PNG";
import img2 from "../../../assests/ProjectScreen/AE/sc2.PNG";
import img3 from "../../../assests/ProjectScreen/AE/sc3.PNG";
import img4 from "../../../assests/ProjectScreen/AE/sc4.PNG";
import img5 from "../../../assests/ProjectScreen/AE/sc5.PNG";
import img6 from "../../../assests/ProjectScreen/AE/sc6.PNG";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectOne = () => {
  return (
    <div className="project_details">
      <h1 className="project_details_heading">Awesomely Eating</h1>
      <h5>Homemade Food Service</h5>
      <h2>Explore in Details</h2>
      <div className="portfolio_item_cta project_one_btn">
        <a
          href="https://github.com/asaad-tt/awesomely-eating-client"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github repo client
        </a>
        <a
          href=" https://github.com/asaad-tt/awesomely-eating-server "
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github repo server
        </a>
        <a
          href="https://awesomely-eating.web.app/"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img1} alt="" />
          </div>
          <h3>Header section</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img2} alt="" />
          </div>
          <h3>Food Category</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="" />
          </div>
          <h3>About Section</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img4} alt="" />
          </div>
          <h3>Blog Section </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img5} alt="" />
          </div>
          <h3>Category based Foods</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img6} alt="" />
          </div>
          <h3>Food Reviews by client</h3>
        </article>
      </div>
      <div className="project_details_brief">
        <h5>How I did to this Projects</h5>
        <h2>Project Details</h2>
        <p>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            For this Project I use tailwind and its library component daisyUi{" "}
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            At first i make some Routes . Also make Private route .
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            In Home Page i Show Header Navbar, Banner section, Service item,
            About section , Working Process etc..
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I used header and footer as shared things , which can show in every
            pages
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I made server for backend , also i create a database in Mongodb.
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I stored data in mongodb database and from there i use data as my
            necessity.
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I also use react photo view , which make a photo a full screen size
            after click{" "}
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            i make a blog route , there i answered some important Question about
            database, programming language etc..
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            After completing the project i deploy the client side to the
            firebase and backend site to vercel.
          </li>
        </p>
      </div>
    </div>
  );
};

export default ProjectOne;
