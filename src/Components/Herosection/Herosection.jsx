import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules"; 

import hero1 from "../../assets/Mediaone.jpg";
import hero2 from "../../assets/photohound-6Xg267sypu8-unsplash.jpg";
import hero3 from "../../assets/Mediathree.jpg";
import hero4 from "../../assets/shibin-joseph-y8eSkP1I5s8-unsplash.jpg";

const slides = [
  {
    image: hero1,
    title: "Delivering Beyond Boundaries",
    subtitle: "Cross-border and offshore services tailored to your needs.",
  },
  {
    image: hero2,
    title: "Where Vision Meets Value",
    subtitle: "Strategies and insights designed for your sustained growth.",
  },
  {
    image: hero3,
    title: "Fin-Acc-Tech Synergy",
    subtitle: "Innovating through technology to achieve financial excellence.",
  },
  {
    image: hero4,
    title: "Taxation Made Simple",
    subtitle: "Best-in-class tax advisory and compliance support, hassle-free.",
  },
];

const Herosection = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]} // ⬅️ add Autoplay here
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        effect="fade"
        autoplay={{
          delay: 2000, // 3s per slide
          disableOnInteraction: false, // keeps autoplay after user swipes
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

              {/* Slide Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight drop-shadow-lg tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl lg:max-w-3xl drop-shadow-md font-light">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
