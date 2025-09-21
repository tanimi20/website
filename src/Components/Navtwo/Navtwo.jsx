import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logofinact.png";

const Navtwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const location = useLocation();

  const navItems = [
    
    { label: "About", path: "/about" },
    {
      label: "Services",
      path: "/services",
      submenu: [
        {
          label: "India",
          items: [
            "Incorporation Services",
            "Registration & Compliance Services",
            "Income Tax and GST Services",
            "Accounting and Bookkeeping Services",
            "Government Registration",
            "Consultation Services",
            "Agreements and Contracts",
          ],
        },
        {
          label: "UAE",
          items: [
            "Business Setup Services",
            "Corporate Tax and Transfer Pricing",
            "VAT Services",
            "Accounting and Finance",
            "Advisory Services",
          ],
        },
      ],
    },
     { label: "Career", path: "/career" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Style control
  const isHomePage = location.pathname === "/";
  const textColor = isHomePage || isScrolled ? "text-gray-900" : "text-gray-900"; // fixed typo
  const bgColor = isHomePage || isScrolled ? "bg-white" : "bg-transparent";
  const hoverColor =
    isHomePage || isScrolled ? "hover:text-blue-600" : "hover:text-gray-300";
  const iconColor = isHomePage || isScrolled ? "text-gray-900" : "text-gray-900"; // fixed typo

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColor} ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Finact Logo"
              className="h-28 w-28 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-8 font-medium uppercase tracking-wide text-sm items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group "
                onMouseEnter={() => {
                  if (item.submenu) {
                    setIsServicesOpen(true);
                    setActiveSubMenu(item.submenu[0].label);
                  }
                }}
                onMouseLeave={() => {
                  if (item.submenu) {
                    setIsServicesOpen(false);
                    setActiveSubMenu("");
                  }
                }}
              >
                <Link
                  to={item.path}
                  className={`transition-colors duration-200 ${textColor} ${hoverColor}`}
                >
                  {item.label}
                </Link>

                {/* Services submenu */}
                {item.submenu && isServicesOpen && (
                  <div className="absolute font-bold text-blue-950 left-1/2 -translate-x-1/2 mt-3 w-[28rem] bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300 flex border border-gray-100">
                    {/* Left: India/UAE */}
                    <ul className="w-1/3 border-r border-gray-200 bg-gray-50">
                      {item.submenu.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className={`px-6 py-3 cursor-pointer font-bold text-blue-950 text-sm font-medium hover:bg-blue-100 transition-colors ${
                            activeSubMenu === sub.label
                              ? "bg-blue-100 text-blue-700 font-semibold"
                              : "text-gray-700"
                          }`}
                          onMouseEnter={() => setActiveSubMenu(sub.label)}
                        >
                          {sub.label}
                        </li>
                      ))}
                    </ul>

                    {/* Right: services list */}
                    <ul className="w-2/3 px-6 py-3">
                      {item.submenu
                        .filter((sub) => sub.label === activeSubMenu)
                        .flatMap((sub) => sub.items)
                        .map((service, idx) => (
                          <li
                            key={idx}
                            className="py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            {service}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${iconColor}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
          <ul className="px-6 py-4 space-y-4 font-medium text-base text-gray-900">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>

                {/* Mobile submenu */}
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((sub, subIndex) => (
                      <div key={subIndex}>
                        <p className="font-semibold py-1 text-blue-700">
                          {sub.label}
                        </p>
                        <ul className="pl-4 space-y-1">
                          {sub.items.map((service, idx) => (
                            <li
                              key={idx}
                              className="py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navtwo;
