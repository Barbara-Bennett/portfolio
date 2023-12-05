import React from "react";
import "./portfolio.css";
import data from "./data.jsx"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            title,
            technology,
            kind,
            description,
            image,
            github,
            demo,
          }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{kind}</small>
                <div className="portfolio__item-technologies">
                  {technology.map((tech, index) => (
                    <span key={index} className="technology-icon">
                      {tech}
                    </span>
                  ))}
                </div>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
