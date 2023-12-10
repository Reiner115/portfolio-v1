import { useEffect } from "react";
import madam from "../assets/madam.jpg";
import Mohamed_Adam from "../assets/Mohamed_Adam - Copy.jpeg";

const About = () => {
  return (
    <section className="about m-3 p-3" id="about">
      <h3 >About Me : </h3>

      <p className="shadow p-3">
      I'm Mohamed Adam, a passionate and dedicated Full Stack software Developer driven by a fervor for crafting innovative solutions for both front end and back end. With a profound love for coding and problem-solving, I bring a dynamic approach to software development.
        
      </p>

      <div className="row row-cols-1 row-cols-sm-2 mt-4 mb-4">
        <div className="col col-12 col-sm-12 col-md-5 mb-4" data-aos="fade-up">
          <img src={Mohamed_Adam} style={{width:"300px"}} alt="" className="img img-fluid  rounded shadow mx-auto d-block" />
        </div>
        <div className="col col-12 col-sm-12 col-md-7">
          <p className="shadow p-4 m-auto"  data-aos="fade-down">
          My journey in the realm of technology has not only equipped me with technical proficiency in backend and frontend using technologies like Java, Spring, React JS, Node JS, and other associated frameworks but has also instilled in me a deep commitment to staying abreast of the latest industry trends.
          </p>
        </div>
      </div>





      
    </section>
  );
};

export default About;
