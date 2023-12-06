import React from "react";
import "./nav.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BsFillFileEarmarkPostFill, BsLinkedin } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skill"
        onClick={() => setActiveNav("#skill")}
        className={activeNav === "#skill" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsFillFileEarmarkPostFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageAltDetail />
      </a>
      <span>|</span>
      <a
        href="https://www.linkedin.com/in/barbaraebennett/"
        onClick={() =>
          setActiveNav("https://www.linkedin.com/in/barbaraebennett/")
        }
        target="_blank"
        rel="noreferrer"
        className={
          activeNav === "https://www.linkedin.com/in/barbaraebennett/"
            ? "active"
            : ""
        }
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Barbara-Bennett"
        onClick={() =>
          setActiveNav("https://github.com/Barbara-Bennett")
        }
        target="_blank"
        rel="noreferrer"
        className={
          activeNav === "https://github.com/Barbara-Bennett"
            ? "active"
            : ""
        }
      >
        <FaGithub />
      </a>
    </nav>
  );
};

export default Nav;

