import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Made with <i className="fas fa-heart "></i>&nbsp;
        <a href="https://www.linkedin.com/in/priyanshu-saluja-ab2329192" target="__blank">
          by Priyanshu Saluja
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/saluja_priyanshu/" target="__blank">
          <i className="fab fa-instagram-square fa-2x instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-saluja-ab2329192" target="__blank">
          <i className="fab fa-linkedin fa-2x linkedin" ></i>
        </a>
        <a href="https://github.com/Psaluja706" target="__blank">
          <i className="fas fa-link fa-2x github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
