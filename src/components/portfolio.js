import "../css/portfolio.css";

import React, { useState } from "react";
import { render } from "react-dom";
import Typed from "react-typed";
import PortfolioHome from "./PortfolioHome";
import { findDOMNode } from "react-dom";
import Aos from "aos";
import About from "./about";
import Skills from "./Skills";
import Projects from "./Projects";
import Hero from "./Hero";
import Contact from "./Contact";
const Portfolio = () => {
  const [class1, setClass1] = useState("profile col col-lg-3 col-4");

  Aos.init();
  function showOrHideMenu() {
    var element = document.getElementById("navbar-section");
    if( element.classList.contains("navbar-section-show") ){
        element.classList.remove("navbar-section-show")
        element.classList.add("narvar-section-hidden");
    }else{
        element.classList.add("navbar-section-show")
        element.classList.remove("narvar-section-hidden");
    }
    
  }

  function changeMenuIcon(){
      var element = document.getElementById("menu-icon");
      if( element.classList.contains("icofont-navigation-menu") ){
        element.classList.remove("icofont-navigation-menu")
        element.classList.add("icofont-close");
      }else{
        element.classList.remove("icofont-close");
        element.classList.add("icofont-navigation-menu")
      }
  }

 function onMenuIconButtonClick(){
      showOrHideMenu();
      changeMenuIcon();
  }

  return (
    <div id="header" >
      <div >
        {/* <span type="button" className="hiddenButton d-block d-sm-block d-md-none d-lg-none" onClick={doit}>x</span> */}
        <i class="hiddenButton icofont-navigation-menu d-block d-sm-block d-md-none d-lg-none m-3" id="menu-icon" onClick={onMenuIconButtonClick} ></i>
        <div className="" >
        <div className="row m-0"  >
        
        
        <section id="navbar-section"   className="col-md-3 col-4  fixed-top  navbar-section" >
            <PortfolioHome></PortfolioHome>
        </section>
        <section   className="col-12  col-md-9 offset-md-3 p-0  ">
        
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        
        </section>
        </div>
        </div>

        
      </div>
    </div>
  );
};


/*
        <section className="main-screen">
        <section className="parallax col-9 "><h1>this is parallax</h1></section>
        
        <div className="about">main main</div>
        </section>
        <section className="col col-3 test"></section>
         <section className="navbar-section col-3 "></section> 
*/
export default Portfolio;
