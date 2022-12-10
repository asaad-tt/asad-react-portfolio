import React from "react";
import "./Experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experiences">
      <h5>What skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5 className="skill_icon"></AiFillHtml5>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <IoLogoCss3 className="skill_icon"></IoLogoCss3>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <SiJavascript className="skill_icon"></SiJavascript>
              <h4>Java Script</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <SiBootstrap className="skill_icon"></SiBootstrap>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="skill_icon"></SiTailwindcss>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <FaReact className="skill_icon"></FaReact>
              <h4>React Js</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/* backend ------------- */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5 className="skill_icon"></AiFillHtml5>
              <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <IoLogoCss3 className="skill_icon"></IoLogoCss3>
              <h4>Express Js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <SiJavascript className="skill_icon"></SiJavascript>
              <h4>MongoDb</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <SiBootstrap className="skill_icon"></SiBootstrap>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
