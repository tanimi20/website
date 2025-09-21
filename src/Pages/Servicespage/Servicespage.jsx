import Completeindiaservices from "../../Components/Completeindiaservices/Completeindiaservices";
import Completeuaseservices from "../../Components/Completeuaseservices/Completeuaseservices";
import Footer from "../../Components/Footer/Footer";
import Indiaservices from "../../Components/Indiaservices/Indiaservices";
import Navbar from "../../Components/Navbar/Navbar";
import Navtwo from "../../Components/Navtwo/Navtwo";
import Uaeservices from "../../Components/Uaeservices/Uaeservices";

const Servicespage = () => {
  return (
    <>
    <Navtwo/>
    <div className="mt-20">
      <Completeindiaservices/>
      
    
    <Completeuaseservices/>
    </div>
    <Footer/>
    </>
    
    
  );
};

export default Servicespage;