import React from "react";
import { FaBriefcase, FaUsers, FaHandshake } from "react-icons/fa";
import CountUp from "react-countup";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Navbar from "../../Components/Navbar/Navbar";
import Navtwo from "../../Components/Navtwo/Navtwo";

const Aboutus = () => {
  return (
    <>
    <Navtwo/>
    <div className="mt-20">
      <About/>
    </div>
    
    <Footer/>
    </>
    
    
  );
};

export default Aboutus;
