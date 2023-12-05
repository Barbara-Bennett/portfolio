import React from "react";
import resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Dowload resume
      </a>
      <a
        href="https://www.linkedin.com/in/barbaraebennett/"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Barbara-Bennett"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        GitHub
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
