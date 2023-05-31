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
              <small>MNNIT Allahabad</small>
              <br />
              <small>
                Incomplete, &nbsp; B.Tech Mechanical Engineering
              </small>{" "}
              <br />
              <small>Jul 2018 - Feb 2021</small>
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
                I was enrolled in B. Tech Mechanical Engineering Program at
                MNNIT Allahabad in session 2018-2022. Later I found myself
                inclined toward learning new computer-related technologies and
                skills by myself. That led to me quitting college in February
                2021.
              </p>
              <p  style={{marginTop:'-1rem'}} >
                I take intrest in reading and learning about different
                disciplines of natural Science. I like to listen all sort of
                music. I'm big fan of Marvel Cinematic Universe (MCU).
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
