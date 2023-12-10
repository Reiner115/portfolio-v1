import profile from "../assets/madam.jpg";
//import profile from '../assets/madam.jpg';
import { useState } from "react";

const PortfolioHome = (props) => {
  return (
    <header id="menu" data-aos="fade-right">
      <div>
        <img className="img-fluid rounded-circle" src={profile}></img>
        <div className="links text-center text-uppercase">
          <h3>
            <a href="#header" className="menu-item">
              {" "}
              {
              //<span class="material-icons md-24">home</span>
              }
              Home
            </a>
          </h3>
          <h3>
            <a href="#about" className="menu-item">
              {" "}
              <span class="material-icons"></span> About
            </a>
          </h3>
          <h3>
            <a href="#skills" className="menu-item">
              {" "}
              <span class="material-icons"></span> Skills
            </a>
          </h3>
          <h3>
            <a href="#projects" className="menu-item">
              {" "}
              <span class="material-icons"></span> Projects
            </a>
          </h3>
          <h3>
            <a href="#contact" className="menu-item">
              {" "}
              <span class="material-icons"></span> Contact
            </a>
          </h3>
        </div>
      </div>
    </header>
  );
};
export default PortfolioHome;

/*

*/
