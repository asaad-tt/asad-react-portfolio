import React from "react";
import "./ProjectTwo.css";
import img1 from "../../../assests/ProjectScreen/BI/bi1.PNG";
import img2 from "../../../assests/ProjectScreen/BI/bi2.PNG";
import img3 from "../../../assests/ProjectScreen/BI/bi3.PNG";
import img4 from "../../../assests/ProjectScreen/BI/bi4.PNG";
import img5 from "../../../assests/ProjectScreen/BI/bi5.PNG";
import img6 from "../../../assests/ProjectScreen/BI/bi6.PNG";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectTwo = () => {
  return (
    <div className="project_details">
      <h1 className="project_details_heading">Antique Bike House</h1>
      <h5>Used Bike Sell and Buy Services</h5>
      <h2>Explore in Details</h2>
      <div className="portfolio_item_cta project_one_btn">
        <a
          href="https://github.com/asaad-tt/antique-bike-house"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github repo client
        </a>
        <a
          href="https://github.com/asaad-tt/antique-bike-house-server "
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github repo server
        </a>
        <a
          href="https://antique-bike-house.web.app/"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
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
          <h3>Bike Category</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="" />
          </div>
          <h3>Service Section</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img4} alt="" />
          </div>
          <h3>Dashboard </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img5} alt="" />
          </div>
          <h3>Question and Answer section </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img6} alt="" />
          </div>
          <h3>Category Based bike</h3>
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
            At first i make some Routes . Also make Private route . i added
            Admin route for admin access.
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            In Home Page i Show Header Navbar, slider section,categories
            section, Service section, About section , Working Process etc..
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
            i make a blog route , there i answered some important Question about
            database, programming language etc..{" "}
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            i create custom hook so that i can make project in a comfort way
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

export default ProjectTwo;
