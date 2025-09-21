import React from "react";

const ServicesSection = ({ title, subtitle, services }) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-700 mb-12 max-w-3xl mx-auto animate-fade-in-up">
          {subtitle}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-start shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="w-full mb-4 overflow-hidden rounded-lg shadow-sm">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                {service.desc}
              </p>

              {/* Service Items */}
              
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind Animations */}
      <style jsx>{`
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;