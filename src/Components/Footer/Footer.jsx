import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from '../../assets/llll.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white font-lexend">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 1. About */}
          <div className="animate-fade-in-up">
            <img
              src={logo}
              alt="Finact Logo"
              className="w-36 sm:w-40 lg:w-48 h-auto mb-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xs">
              At Finact Advisors, we are committed to delivering exceptional
              services, fostering trust, and building long-lasting relationships
              through excellence and integrity.
            </p>
          </div>

          {/* 2. Career */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:w-14 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0">
              Career
            </h3>
            <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
              {[
                "Job Openings",
                "Internships",
                "Company Culture",
                "Benefits",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:w-14 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0">
              Services
            </h3>
            <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
              {[
                { label: "Consulting", link: "/services/consulting" },
                {
                  label: "Software Development",
                  link: "/services/development",
                },
                { label: "Support & Maintenance", link: "/services/support" },
                { label: "Custom Solutions", link: "/services/custom" },
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.link}
                    className="hover:text-blue-300 transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:w-14 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0">
              Contact Details
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-full bg-blue-700 transition-colors duration-300 hover:bg-blue-600">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </span>
                <p className="text-gray-200 leading-relaxed">
                  Plot no 56, Rose wood street, Malibu town, Sector 47, Gurugram
                  (Haryana), 122018
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    number: "+971-569130115 (UAE)",
                    link: "https://wa.me/971569130115",
                  },
                  {
                    number: "+91-9871524975 (INDIA)",
                    link: "https://wa.me/919871524975",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="p-2 rounded-full bg-green-600 transition-colors duration-300 hover:bg-green-500">
                      <FaWhatsapp className="text-white text-lg" />
                    </span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-green-300 transition-colors duration-300"
                    >
                      {item.number}
                    </a>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-blue-600 transition-colors duration-300 hover:bg-blue-500">
                  <FaPhoneAlt className="text-white text-lg" />
                </span>
                <a
                  href="tel:+91-9871524975"
                  className="text-gray-200 hover:text-blue-300 transition-colors duration-300"
                >
                  +91-9871524975
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-yellow-500 transition-colors duration-300 hover:bg-yellow-400">
                  <FaEnvelope className="text-white text-lg" />
                </span>
                <a
                  href="mailto:Finactadvisors@gmail.com"
                  className="text-gray-200 hover:text-yellow-300 transition-colors duration-300"
                >
                  Finactadvisors@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 mt-12 pt-6 text-center animate-fade-in-up animation-delay-800">
          <p className="text-xs sm:text-sm text-gray-300 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-300">Finact Advisors</span>. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
