import React from "react";
import "./about.css";
import kp1 from "../../assets/kp1.jpg";
import { FaAward } from "react-icons/fa";
import { MdCastForEducation, MdLanguage } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={kp1} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <MdCastForEducation className="about_icon" />
              <h5>Education</h5>
              <small>RAJ KUMAR GOEL INSTITUTE OF TECHNOLOGY AND MANAGEMENT</small>
              <br />
              <small>
                &nbsp; B.Tech, Computer science and Engineering
              </small>{" "}
              <br />
              <small>Jul 2019 - Feb 2023</small>
            </article>
            <article className="about_card">
              <MdLanguage className="about_icon" />
              <h5>Language</h5>
              <small>English and Hindi</small>
            </article>
          </div>
          <p>
            <div>
              <p>
                I have been enrolled in B. Tech Computer Science and  Engineering Program at
                RKGITM  Ghaziabad in session 2019-2023
              </p>
              <p  style={{marginTop:'-1rem'}} >
                I take intrest in reading and learning about different
                disciplines of natural Science. I like to listen all sort of
                music. I'm big fan of Marvel Cinematic Universe (MCU) I like play cricket in my sphare time and I also like cook food and I also like travling. 
              </p>
            </div>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
