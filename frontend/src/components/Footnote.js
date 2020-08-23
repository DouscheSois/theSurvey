import React from "react";

const Footnote = () => {
  return (
    <div className="footnote">
      <h4>© 2020 - A douschesois creation</h4>
      <div className="footnote-links">
        <a href="https://www.douschesois.com/">
          <i className="fas fa-globe"></i>Website
        </a>
        <a href="https://www.linkedin.com/in/roger-alexander-37925619a/">
          <i className="fab fa-linkedin"></i>
          Linkedin
        </a>
        <a href="https://github.com/DouscheSois">
          {" "}
          <i className="fab fa-github"></i>Github
        </a>
      </div>
    </div>
  );
};

export default Footnote;
