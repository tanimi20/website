// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landingpage from "./Pages/Landingpage/Landingpage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Herosection from "./Components/Herosection/Herosection";
import Contact from "./Pages/Contact/Contact";
import Servicespage from "./Pages/Servicespage/Servicespage";
import CareerFormPage from "./Pages/CareerFormPage/CareerFormPage";

function App() {
  return (
    <Router>
     
     
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path='/about' element={<Aboutus/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/services' element={<Servicespage/>}/>
         <Route path='/career' element={<CareerFormPage/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
