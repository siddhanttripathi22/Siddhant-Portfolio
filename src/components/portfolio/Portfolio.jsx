import React from "react";
import "./portfolio.css";
import invent from "../../assets/invent852.png";
import chat from "../../assets/chat852.png";
import beginner from "../../assets/beginner852.png";

const data = [
  {
    id: 1,
    image: invent,
    title: "Inventory Management Web App",
    live: "https://inventory-kp.vercel.app/",
    github: "https://github.com/kcarniwall50/inventory_management_app",
  },

  {
    id: 2,
    image: chat,
    title: "Web Chat App",
    live: "https://web-chat-app-kp.vercel.app",
    github: "https://github.com/kcarniwall50/web_chat_app_client",
  },

  {
    id: 3,
    image: beginner,
    title: "Web-Dev-Beginner Project",
    live: "https://kp-web-dev-beginner.netlify.app/",
    github: "https://github.com/kcarniwall50/web_dev_beginner",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, live }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt="" style={{ width: "100%" }} />
              </div>
              <h4>{title}</h4>

              <div className="portfolio_item-cta">
                <a href={live} className=" btn btn-primary" target="_blank">
                  Live
                </a>

                <a href={github} className="btn" target="_blank">
                  Source Code
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
