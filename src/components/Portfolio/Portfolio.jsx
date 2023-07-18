import React from "react";
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Olx from "../../img/olx.png";
import Elo from "../../img/elo.png";
import realEstate from '../../img/portfolio/realEstate.PNG'
import LuckyDraw from '../../img/portfolio/luckyDraw.PNG'
import chatApp from '../../img/portfolio/chatApp.PNG'
import Food from "../../img/food.png";
import Reume from "../../img/portfolio.png";
import "swiper/css";

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const urls= ["https://elo-app.netlify.app/", "https://ad-posting-app.netlify.app/", "https://github.com/AliUzair999", "https://restaurant-app-uzair.netlify.app/"]

    const data = [
        {
            name: "elo",
            img: Elo,
            gitLink: "https://github.com/AliUzair999/elo-app",
            liveLink: "https://elo-app.netlify.app/",
        },
    ]
    return (
        <div className="portfolio" id="Portfolio">

            {/* HEADING */}
            <span style={darkMode ? { color: "white" } : { color: "" }} >Recent Project</span>
            <span className="port-head">Portfolio</span>

            {/* SLIDER */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>                   
                        <img src={realEstate} alt="realEstate" onClick={() => {
                        window.open('https://uzair-real-estate.netlify.app/', '_blank');
                    }}/>
                    <span className="portfolio-text">
                        Real Estate
                    </span>
                </SwiperSlide>
                
                <SwiperSlide>                   
                        <img src={Elo} alt="Elo" onClick={() => {
                        window.open('https://elo-app.netlify.app/', '_blank');
                    }}/>
                     <span className="portfolio-text">
                        Ecommerce App
                    </span>
                </SwiperSlide>
                <SwiperSlide>                   
                        <img src={LuckyDraw} alt="LuckyDraw" onClick={() => {
                        window.open('https://uzair-luckydraw.netlify.app/', '_blank');
                    }}/>
                     <span className="portfolio-text">
                        Luckydraw App
                    </span>
                </SwiperSlide>
                <SwiperSlide>                   
                        <img src={chatApp} alt="chatApp" onClick={() => {
                        window.open('https://drive.google.com/file/d/1sONVI6pWA8FXlNmJVbptxCUZAHE5K3Nq/view?usp=sharing', '_blank');
                    }}/>
                     <span className="portfolio-text">
                        Chat App
                    </span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={Olx} alt="Olx" onClick={() => {
                        window.open('https://ad-posting-app.netlify.app/', '_blank');
                    }}/>
                     <span className="portfolio-text">
                        OLX
                    </span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Reume} alt="Portfolio" onClick={() => {
                        window.open('https://github.com/AliUzair999/portfolio', '_blank');
                    }}/>
                     <span className="portfolio-text">
                        Portfolio
                    </span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Food} alt="Food" onClick={() => {
                        window.open('https://restaurant-app-uzair.netlify.app/', '_blank');
                    }}/>
                     <span className="portfolio-text">
                        Food Ordering
                    </span>
                </SwiperSlide>
                

            </Swiper>
        </div>
    )
}

export default Portfolio

