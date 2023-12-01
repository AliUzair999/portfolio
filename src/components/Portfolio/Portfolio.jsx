import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from 'swiper';
import Olx from "../../img/olx.png";
import AntD from "../../img/portfolio/AntD.PNG";
import Customers from "../../img/portfolio/Dashboard.png";
import Gatsby from "../../img/portfolio/Gatsby.PNG";
import Elo from "../../img/elo.png";
import realEstate from "../../img/portfolio/realEstate.PNG";
import LuckyDraw from "../../img/portfolio/luckyDraw.PNG";
import chatApp from "../../img/portfolio/chatApp.PNG";
import Food from "../../img/food.png";
import Reume from "../../img/portfolio.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const urls= ["https://elo-app.netlify.app/", "https://ad-posting-app.netlify.app/", "https://github.com/AliUzair999", "https://restaurant-app-uzair.netlify.app/"]

  const slides = [
    {
      name: "Gatsby",
      img: Gatsby,
      link: "https://uzair-gatsby.netlify.app/",
      desc: "Gatsby Project",
    },
    {
      name: "Dashboard",
      img: Customers,
      link: "https://uzair-strugbits.netlify.app/",
      desc: "Admin Dashboard",
    },
    {
      name: "Ant Design",
      img: AntD,
      link: "https://uzair-antd.netlify.app/",
      desc: "Ant Design",
    },
    {
      name: "realEstate",
      img: realEstate,
      link: "https://uzair-real-estate.netlify.app/",
      desc: "Real Estate",
    },
    {
      name: "Elo",
      img: Elo,
      link: "https://elo-app.netlify.app/",
      desc: "Ecommerce App",
    },
    {
      name: "LuckyDraw",
      img: LuckyDraw,
      link: "https://uzair-luckydraw.netlify.app/",
      desc: "Luckydraw App",
    },
    {
      name: "chatApp",
      img: chatApp,
      link: "https://drive.google.com/file/d/1sONVI6pWA8FXlNmJVbptxCUZAHE5K3Nq/view?usp=sharing",
      desc: "Chat App",
    },
    {
      name: "Portfolio",
      img: Reume,
      link: "https://github.com/AliUzair999/portfolio",
      desc: "Portfolio",
    },
    {
      name: "Food App",
      img: Food,
      link: "https://restaurant-app-uzair.netlify.app/",
      desc: "Food Ordering",
    },
  ];

  // SwiperCore.use([Autoplay]);

  return (
    <div className="portfolio" id="Portfolio">
      {/* HEADING */}
      <span style={darkMode ? { color: "white" } : { color: "" }}>
        Recent Project
      </span>
      <span className="port-head">Portfolio</span>

      {/* SLIDER */}

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        spaceBetween={30}
        
        grabCursor={true}
        className="portfolio-slider"
        // centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        // clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        scrollbar={{ draggable: true }}
        keyboard={{ enabled: true }}
        direction="horizontal"
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide>
              <img
                src={item.img}
                alt={item.name}
                onClick={() => {
                  window.open(item.link, "_blank");
                }}
              />
              <span className="portfolio-text">{item.desc}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
