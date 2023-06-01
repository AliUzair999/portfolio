import React from "react";
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Olx from "../../img/olx.png";
import Elo from "../../img/elo.png";
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
            <span>Portfolio</span>

            {/* SLIDER */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>                   
                        <img src={Elo} alt="Elo" onClick={() => {
                        window.open('https://elo-app.netlify.app/', '_blank');
                    }}/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={Olx} alt="Olx" onClick={() => {
                        window.open('https://ad-posting-app.netlify.app/', '_blank');
                    }}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Reume} alt="Portfolio" onClick={() => {
                        window.open('https://github.com/AliUzair999/portfolio', '_blank');
                    }}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Food} alt="Food" onClick={() => {
                        window.open('https://restaurant-app-uzair.netlify.app/', '_blank');
                    }}/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Portfolio

