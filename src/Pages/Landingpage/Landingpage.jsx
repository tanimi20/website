import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Herosection from "../../Components/Herosection/Herosection";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Indiaservices from "../../Components/Indiaservices/Indiaservices";
import Uaeservices from "../../Components/Uaeservices/Uaeservices";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Landingpage = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="animate-fade-in">
        <Herosection />
      </div>

      {/* About Section */}
      <div className="animate-slide-up">
        <About />
      </div>

      {/* Swiper Slider for India & UAE Services */}
      <div className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }} 
          loop={true}
          effect="fade"
          speed={800} 
          className="w-full"
        >
          <SwiperSlide>
            <div className="animate-fade-in">
              <Indiaservices />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-fade-in">
              <Uaeservices />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* ✅ Custom Navigation Buttons (must be outside Swiper) */}
        <div className="swiper-button-prev !text-blue-600 !w-12 !h-12 after:!text-2xl hover:!text-blue-800 transition-colors duration-300"></div>
        <div className="swiper-button-next !text-blue-600 !w-12 !h-12 after:!text-2xl hover:!text-blue-800 transition-colors duration-300"></div>
      </div>

      {/* ContactUs Section */}
      <div className="animate-slide-up animation-delay-200">
        <ContactUs />
      </div>

      {/* Footer Section */}
      <div className="animate-slide-up animation-delay-400">
        <Footer />
      </div>

      {/* Custom Swiper and Animation Styles */}
      <style jsx>{`
        .swiper {
          padding-bottom: 3rem;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 10px;
          height: 10px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
          transform: scale(1.2);
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #2563eb;
          --swiper-navigation-size: 24px;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Landingpage;
