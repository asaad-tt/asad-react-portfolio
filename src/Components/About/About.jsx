import React from "react";
import "./About.css";
import kachuri from "../../assests/kachuri.jpg";
import { FaAward } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={kachuri} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"></FaAward>
              <h5>Experience</h5>
              <small>1 year Working</small>
            </article>
            <article className="about_card">
              <MdModelTraining className="about_icon"></MdModelTraining>
              <h5>Training</h5>
              <small>6 month</small>
            </article>
            <article className="about_card">
              <RiProjectorFill className="about_icon"></RiProjectorFill>
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>
          <p>
            I’m Md Asaduzzaman Passionate at web development. I’m working
            minimum of 13-14 hours every day, I love to do this it’s my
            life-everything. My goal is to satisfy my company / clients, try to
            understand what they want for there website, help them from
            beginning to end the project and give support for every problem. If
            need I communicate by video or audio conversations to understand the
            problems and project requirements. After completing website and
            projects I give instructions, How they can manage, edit, update, add
            page and post on the website by themselves. if needed I send video
            tutorials.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
