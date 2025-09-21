import React from "react";
import { FaBriefcase, FaUsers, FaHandshake } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Navtwo from "../../Components/Navtwo/Navtwo";


const Contact = () => {
  return (
    <>
    <Navtwo/>
   <div className="mt-20">
     <ContactUs/>
   </div>
    <Footer/>
    
    </>
  );
};

export default Contact;
