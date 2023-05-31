import React, { useState } from "react";
import "./nav.css";
import { RxHome } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";

import { MdOutlineArticle  } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RxHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("/experience")}
        className={activeNav === "/experience" ? "active" : ""}
      >
        <FiBook />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <GrProjects  style={{color:"white"}}  color="white"/> 
      </a>

      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
       
        <MdOutlineArticle/>
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
