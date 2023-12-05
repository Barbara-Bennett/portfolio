import React from "react";
import barbara from "../../assets/barbara.jpeg";
import { MdLanguage, MdSchool } from "react-icons/md";
import { BiLogoPython, BiLogoJavascript } from "react-icons/bi";

const About = () => {
  return (
    <div id="about">
      <div className="about__me">
        <div className="about__me-image">
          <img src={barbara} alt="Barbara" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <MdSchool className="about__icon" />
            <h5>Ada Developers Academy</h5>
          </article>

          <article className="about__card">
            <MdLanguage className="about__icon" />
            <h5>English</h5>
            <h5>Portuguese</h5>
          </article>

          <article className="about__card">
            <BiLogoPython className="about__icon" />
            <BiLogoJavascript className="about__icon" />
            <h5>+15 projects</h5>
          </article>
        </div>

        <p>
          I'm Barbara, a Brazilian soul with a Green Card and an unwavering
          passion for creating digital solutions and improvements. For the past
          three years, the United States has been my home, where I've not only
          embraced a new culture but also embarked on an exciting career
          transition. <br />
          With a Bachelor's degree in Tourism, I've cultivated a unique approach
          to understanding people—their desires, challenges, and dreams. My
          journey is grounded in the ability to listen and empathize, forming
          the bedrock for connecting with clients and envisioning innovative
          solutions tailored to their unique needs. <br />
          In my pursuit of excellence, I've evolved into a results-oriented
          software engineer. Proficient in Python, Flask, Django, and web
          development, I find joy in crafting digital experiences that transcend
          expectations. Whether it's through the calm and reliability of a
          stable environment or contributing from the background, my soft skills
          as a team player, cooperative and supportive nature, bring sincerity
          and loyalty to every project. <br />
          Let's combine our strengths and build something extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default About;
