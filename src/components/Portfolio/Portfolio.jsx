import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from 'swiper';
// import Olx from "../../img/olx.png";

import Customers from "../../img/portfolio/Dashboard.png";
import Gatsby from "../../img/portfolio/Gatsby.PNG";
// import realEstate from "../../img/portfolio/realEstate.PNG";
import LuckyDraw from "../../img/portfolio/luckyDraw.png";
// import Resume from "../../img/portfolio.png";
import Cosmetics from "../../img/portfolio/cosmetics.png"
import Inncahoots from "../../img/portfolio/inncahoots.png"
import Mih from "../../img/portfolio/mih.png"
import Juice from "../../img/portfolio/juice.png"
import Vapes from "../../img/portfolio/vapes.png"

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
      name: "Mih",
      img: Mih,
      link: "https://marriage-in-heaven-website-roan.vercel.app/",
      desc: "Banquet Management App",
    },
    {
      name: "Juice",
      img: Juice,
      link: "https://sociallyrawcle.com/",
      desc: "Ecommerce App",
    },
    {
      name: "Vapes",
      img: Vapes,
      link: "https://tobaccovapesmart.com/",
      desc: "Ecommerce App",
    }, {
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
    // {
    //   name: "realEstate",
    //   img: realEstate,
    //   link: "https://uzair-real-estate.netlify.app/",
    //   desc: "Real Estate",
    // },
    {
      name: "LuckyDraw",
      img: LuckyDraw,
      link: "https://uzair-luckydraw.netlify.app/",
      desc: "Luckydraw App",
    },


    {
      name: "Cosmetics",
      img: Cosmetics,
      link: "https://nisacosmeticslondon.com/",
      desc: "Cosmetics Web App",
    },
    {
      name: "Inncahoots",
      img: Inncahoots,
      link: "https://www.inncahoots.com/listings",
      desc: "Hotel booking app",
    },

    // {
    //   name: "Portfolio",
    //   img: Resume,
    //   link: "https://github.com/AliUzair999/portfolio",
    //   desc: "Portfolio",
    // },

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
