import React, { useState } from "react";

const Designservices = ({ title, subtitle, services }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-blue-950 tracking-wide mb-3">
          {title}
        </h2>
        <p className="text-lg md:text-xl font-extrabold text-gray-600 mb-12">
          {subtitle}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-start transition-all duration-300 ${
                  isHovered ? "shadow-2xl -translate-y-2" : "shadow-sm"
                }`}
              >
                {/* Image */}
                <div className="w-full mb-4 overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`w-full h-40 object-cover transition-transform duration-300 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-2 tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-lg font-bold leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Items List */}
                {service.items && (
                  <ul
                    className={`mt-4 font-bold text-gray-800 space-y-2 transition-all duration-500 ease-in-out ${
                      isHovered
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className={`text-sm text-gray-600 font-bold transition-all duration-300 ${
                          isHovered
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                        style={{
                          transitionDelay: isHovered ? `${i * 100}ms` : "0ms",
                        }}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Designservices;
