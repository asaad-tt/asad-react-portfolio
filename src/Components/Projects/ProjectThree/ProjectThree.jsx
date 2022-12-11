import React from "react";
import "./ProjectThree.css";
import img1 from "../../../assests/ProjectScreen/LA/la1.PNG";
import img2 from "../../../assests/ProjectScreen/LA/la2.PNG";
import img3 from "../../../assests/ProjectScreen/LA/la3.PNG";
import img4 from "../../../assests/ProjectScreen/LA/la4.PNG";
import img5 from "../../../assests/ProjectScreen/LA/la5.PNG";
import img6 from "../../../assests/ProjectScreen/LA/la6.PNG";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectThree = () => {
  return (
    <div className="project_details">
      <h1 className="project_details_heading">Learnex Academy</h1>
      <h5>Online Course Based Site</h5>
      <h2>Explore in Details</h2>
      <div className="portfolio_item_cta project_one_btn">
        <a
          href="https://github.com/asaad-tt/learnex-academy-client"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github repo client
        </a>
        <a
          href="https://github.com/asaad-tt/learnex-academy-server "
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github repo server
        </a>
        <a
          href="https://learnex-academy.web.app/"
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
          <h3>Course Category</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="" />
          </div>
          <h3>Course Details</h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img4} alt="" />
          </div>
          <h3>Question and Answer </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img5} alt="" />
          </div>
          <h3>FAQ Section </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img6} alt="" />
          </div>
          <h3>Category Based Course</h3>
        </article>
      </div>
      <div className="project_details_brief">
        <h5>How I did to this Projects</h5>
        <h2>Project Details</h2>
        <p>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            At the very beginning i created react app for my client side and
            server side.{" "}
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I made many components as i need for my project .
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I create a route component where all the route i declare .
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I also use firebase for authentication
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            And i authenticate my project through email password , google and
            github .
          </li>
          <li>
            {" "}
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I also made private route so that user can not enter checkout page
            without login.
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I load data from my server where i created some api .{" "}
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            through the server api i load data dynamically for dynamic route
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            I also made a blog where some question are answered and create a FAQ
            section
          </li>
          <li>
            <BsFillCheckCircleFill className="project_tick"></BsFillCheckCircleFill>
            After doing all necessary work i push my code in github private
            repository. and deploy this project in firebase .
          </li>
        </p>
      </div>
    </div>
  );
};

export default ProjectThree;
