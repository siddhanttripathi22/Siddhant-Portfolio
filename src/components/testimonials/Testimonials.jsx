import React from "react";
import "./testimonials.css";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { GiGalaxy } from "react-icons/gi";
import { GiIndianPalace } from "react-icons/gi";
import { HiPhoto } from "react-icons/hi2";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiText } from "react-icons/bi";
import { BsArrowDownShort, BsArrowRightShort } from "react-icons/bs";
// import 'swiper/css/scrollbar';

const data = [
  {
    avtar: <GiGalaxy  style={{padding:'0.4rem'}} size="50" color="pink" />,
    name: "Are you a cosmic geek?",
    review:
      "It is a CLI based quiz about How much do you know Universe in nutshell? . It is score based quiz. Test your knowledge regarding Cosmose.",
    play: "https://replit.com/@kcarniwall50/mark-2-CLI-app?embed=1&output=1",
    sourceCode:
      "https://github.com/kcarniwall50/Are-you-a-cosmic-geek--/tree/main",
  },

  {
    avtar: <GiIndianPalace  style={{padding:'0.5rem'}} size="50" color="white" />,
    name: "Do you know India?",
    review:
      "It is a CLI based quiz about How much do you know India? . It is score based quiz. Test your knowledge regarding India",
    play: "https://replit.com/@kcarniwall50/mark-1-CLI-app?embed=1&output=1",
    sourceCode: "https://github.com/kcarniwall50/Do-you-know-India---",
  },


  {
    avtar:<span style={{display:'flex', alignItems:'center', width:'100%', 
    justifyContent:'center', margin:'25% 0', padding:'0.2rem'
    }} > <BiText size="20" color="white" />
    
{/* <BsArrowDownShort size="18" color="white" /> */}

    <BsArrowRightShort  size="15" color="white" />
    
     <HiPhoto  size="20" color="white" /> </span>,
    name: "Text2Image",
    review:
      "The app for transforming your words into captivating visuals. Simply input your text, and Text2Image will generate stunning images that bring your ideas to life.",
    play: "https://text-to-image-kp.netlify.app/",
    sourceCode: "https://github.com/kcarniwall50/text_to_image",
  },

];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>
        Got Time? &nbsp; <code style={{ color: "white" }}>try quiz</code>{" "}
      </h2>

      <Swiper
        className="container testimonials_container"
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avtar, name, review, play, sourceCode }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">{avtar}</div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <a href={play} target="_blank">
                  play
                </a>
                <a href={sourceCode} target="_blank">
                  source code
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
