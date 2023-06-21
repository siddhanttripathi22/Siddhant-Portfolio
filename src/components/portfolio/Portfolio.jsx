import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import invent from "../../assets/invent852.png";
import chat from "../../assets/chat852.png";
import beginner from "../../assets/beginner852.png";
import ecommerce from "../../assets/e-commerce852.png";
import youtube from "../../assets/youtube852.png";
import EcommerceDetail from "./EcommerceDetail";
import InventoryDetail from "./InventoryDetail";
import ChatDetail from "./ChatDetail";
import YoutubeCloneDetail from "./YoutubeCloneDetail";
import BeginnerDetail from "./BeginnerDetail";

const data = [
  {
    id: 1,
    image: invent,
    title: "Inventory Management App",
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
  const inventRef = useRef();
  const inventDetailRef = useRef();

  const chatRef = useRef();
  const chatDetailRef = useRef();

  const ecommerceRef = useRef();
  const ecommerceDetailRef = useRef();

  const beginnerRef = useRef();
  const beginnerDetailRef = useRef();

  const youtubeRef = useRef();
  const youtubeDetailRef = useRef();

  const [isInventTechStackOpen, setIsInventTechStackOpen] = useState(false);
  const [isChatTechStackOpen, setIsChatTechStackOpen] = useState(false);
  const [isEcommerceTechStackOpen, setIsEcommerceTechStackOpen] =
    useState(false);
  const [isBeginnerTechStackOpen, setIsBeginnerTechStackOpen] = useState(false);
  const [isYoutubeTechStackOpen, setIsYoutubeTechStackOpen] = useState(false);

  const kp = (e) => {
    // invent ref
    if (!inventRef.current?.contains(e.target)) {
      setIsInventTechStackOpen(() => false);
    }
    if (inventDetailRef.current?.contains(e.target)) {
      setIsInventTechStackOpen(() => true);
    }

    // chat ref
    if (!chatRef.current?.contains(e.target)) {
      setIsChatTechStackOpen(() => false);
    }
    if (chatDetailRef.current?.contains(e.target)) {
      setIsChatTechStackOpen(() => true);
    }

    // e-commerce  ref
    if (!ecommerceRef.current?.contains(e.target)) {
      setIsEcommerceTechStackOpen(() => false);
    }
    if (ecommerceDetailRef.current?.contains(e.target)) {
      setIsEcommerceTechStackOpen(() => true);
    }

    // beginner ref
    if (!beginnerRef.current?.contains(e.target)) {
      setIsBeginnerTechStackOpen(() => false);
    }
    if (beginnerDetailRef.current?.contains(e.target)) {
      setIsBeginnerTechStackOpen(() => true);
    }

    //  youtube clone ref
    if (!youtubeRef.current?.contains(e.target)) {
      setIsYoutubeTechStackOpen(() => false);
    }
    if (youtubeDetailRef.current?.contains(e.target)) {
      setIsYoutubeTechStackOpen(() => true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", kp);
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={invent} alt="" style={{ width: "100%" }} />
          </div>
          <b>Inventory Management App</b> <br />
          <div>
            <p
              ref={inventRef}
              onClick={() => setIsInventTechStackOpen((prev) => !prev)}
              className="btn-techStack"
            >
              Used Tech Stack{" "}
            </p>

            {isInventTechStackOpen && (
              <div
                ref={inventDetailRef}
                className={
                  isInventTechStackOpen
                    ? "techStack-points"
                    : "noTechStack-points"
                }
              >
                {/* project overview */}
                <div style={{padding:'1em'}} >
                  <h5 style={{fontSize:'1rem'}} > Project Overview: </h5>
                  <p>
                  {/* The inventory management React app is a web-based application that helps businesses  manage and organize their inventory. It provides a user-friendly interface for users to perform various inventory-related tasks. */}

                  This inventory management React app is a web application that uses React, a JavaScript library, to manage inventory. It allows users to track the quantity of products in stock, add and remove products on inventory levels. Inventory React app has been  built using the MERN stack, which consists of MongoDB, Express, React, and Node.js.
                  </p>
                </div>

                <InventoryDetail />

                {/* technologies used  */}
                {/* <div style={{ margin: "1rem 0" }}>
                  <h5>Technologies Used:</h5>
                  <InventoryDetail />
                </div> */}

                {/* key features  */}
                {/* <div style={{ margin: "1rem 0" }}>
                  <h5>Key Fearures:</h5>
                  <InventoryDetail />
                </div> */}

                {/* challenges and solutions  */}
                {/* <div>
                  {" "}
                  <h5>Challenges and Solutions</h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </p>
                </div> */}
              </div>
            )}
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://inventory-kp.vercel.app/"
              className=" btn btn-primary"
              target="_blank"
            >
              Live
            </a>

            <a
              href="https://github.com/kcarniwall50/inventory_management_app"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={chat} alt="" style={{ width: "100%" }} />
          </div>
          <b>Web Chat App</b> <br />
          <div>
            <p
              ref={chatRef}
              onClick={() => setIsChatTechStackOpen((prev) => !prev)}
              className="btn-techStack"
            >
              Used Tech Stack{" "}
            </p>

            {isChatTechStackOpen && (
              <div
                ref={chatDetailRef}
                className={
                  isChatTechStackOpen
                    ? "techStack-points"
                    : "noTechStack-points"
                }
              >
                {/* project overview */}
                <div  style={{padding:'1em'}} >
                  <h5 style={{fontSize:'1rem'}} >
                   Project Overview: </h5>
                  <p>
                  A React chat app built with Socket.io combines the power of React's user interface components with Socket.io's real-time communication capabilities. This combination allows for the creation of a dynamic and interactive chat application.

                  It is a group chat React App.
                  </p>
                </div>

                <ChatDetail />


              </div>
            )}
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://web-chat-app-kp.vercel.app"
              className=" btn btn-primary"
              target="_blank"
            >
              Live
            </a>

            <a
              href="https://github.com/kcarniwall50/web_chat_app_client"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ecommerce} alt="" style={{ width: "100%" }} />
          </div>
          <b>E-Commerce App</b> <br />
          <div>
            <p
              ref={ecommerceRef}
              onClick={() => setIsEcommerceTechStackOpen((prev) => !prev)}
              className="btn-techStack"
            >
              Used Tech Stack{" "}
            </p>

            {isEcommerceTechStackOpen && (
              <div
                ref={ecommerceDetailRef}
                className={
                  isEcommerceTechStackOpen
                    ? "techStack-points"
                    : "noTechStack-points"
                }
              >
                <EcommerceDetail />


              </div>
            )}
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://e-commerce-kp.vercel.app"
              className=" btn btn-primary"
              target="_blank"
            >
              Live
            </a>

            <a
              href="https://github.com/kcarniwall50/mern_e-commerce"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={youtube} alt="" style={{ width: "100%" }} />
          </div>
          <b>Youtube Clone</b> <br />
          <div>
            <p
              ref={youtubeRef}
              onClick={() => setIsYoutubeTechStackOpen((prev) => !prev)}
              className="btn-techStack"
            >
              Used Tech Stack{" "}
            </p>

            {isYoutubeTechStackOpen && (
              <div
                ref={youtubeDetailRef}
                className={
                  isYoutubeTechStackOpen
                    ? "techStack-points"
                    : "noTechStack-points"
                }
              >
                {/* project overview */}
                <div style={{padding:'1em'}} >
                  <h5 style={{fontSize:'1rem'}}>
                   Project Overview: </h5>
                  <p>
                  {/* The YouTube Clone React App is a web application built using React. This clone aims to replicate the core functionalities and design of the original YouTube platform, allowing users to search and watch videos.


                  The YouTube Clone React App provides a familiar and user-friendly interface that mimics the core features of the original YouTube platform. By leveraging React's flexibility and the YouTube Data API, this clone offers users the ability to search and watch videos. */}


                  The YouTube Clone built with React and Material-UI (MUI) is an application that replicates the core functionalities of YouTube, while incorporating the visual design principles of Material-UI. One of the key features of this clone is the provision of multiple categories to help users find videos of their interest easily. 
                  </p>
                </div>


                <YoutubeCloneDetail />


              </div>
            )}
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://youtube-clone-kp.netlify.app/"
              className=" btn btn-primary"
              target="_blank"
            >
              Live
            </a>

            <a
              href="https://github.com/kcarniwall50/youtube_clone/tree/main"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </article>

        {/* beginner web dev project */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={beginner} alt="" style={{ width: "100%" }} />
          </div>
          <b>Web-Dev-Beginner Projects</b> <br />
          <div>
            <p
              ref={beginnerRef}
              onClick={() => setIsBeginnerTechStackOpen((prev) => !prev)}
              className="btn-techStack"
            >
              Used Tech Stack{" "}
            </p>

            {isBeginnerTechStackOpen && (
              <div
                ref={beginnerDetailRef}
                className={
                  isBeginnerTechStackOpen
                    ? "techStack-points"
                    : "noTechStack-points"
                }
              >
                {/* project overview */}
                <div style={{padding:'1em'}} >
                  <h5 style={{fontSize:'1rem'}}>
                   Projects Overview
                   </h5>
                  <p>
                  During my journey as a beginner in web development, I had completed several projects using HTML, CSS, and JavaScript. These projects were designed to help me gain a solid foundation in front-end web development and apply the fundamental concepts I learned. Here is the overview of some projects.
                  </p>
                </div>

                <BeginnerDetail />

                <div style={{padding:'1em'}} >
        <p>
        Throughout these projects, I had gained valuable hands-on experience with HTML, CSS, and JavaScript. They allowed me to apply the core concepts of web development, practice important skills, and build a strong foundation for future projects. By completing these beginner projects, I have improved my understanding of front-end development principles and feel more confident in my abilities as a web developer.
        </p>
      </div>


              </div>
            )}
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://web-dev-beginner-kp.netlify.app/"
              className=" btn btn-primary"
              target="_blank"
            >
              Live
            </a>

            <a
              href="https://github.com/kcarniwall50/web-dev-beginner-projects"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
