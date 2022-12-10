import React from "react";
import "./Portfolio.css";
import img1 from "../../assests/food.jpg";
import img2 from "../../assests/bike.jpg";
import img3 from "../../assests/course.jpg";

const Portfolio = () => {
  return (
    <section id="project" className="portfolio">
      <h5>My Recent Work </h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img1} alt="" />
          </div>
          <h3>Awesomely Eating</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/asaad-tt/awesomely-eating-client"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://awesomely-eating.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img2} alt="" />
          </div>
          <h3>Antique Bike House</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/asaad-tt/antique-bike-house"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://antique-bike-house.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="" />
          </div>
          <h3>Learnex Academy</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/asaad-tt/learnex-academy-client"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://learnex-academy.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
