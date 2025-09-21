import React from "react";
import { FaBriefcase, FaUsers, FaHandshake } from "react-icons/fa";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="text-gray-800 font-sans bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen">
      {/* Intro Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-blue-700 animate-fade-in">
              About <span className="text-blue-900">Us</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-6 animate-fade-in-up">
              <strong className="text-blue-800">Finact Consultants & Advisors LLP</strong> is a premier accounting and financial advisory firm offering end-to-end solutions in <strong>India</strong> and the <strong>UAE</strong>. 
              We specialize in <span className="font-semibold">bookkeeping, taxation, payroll, audits, company incorporation, and compliance consultancy</span>—empowering businesses to stay compliant while driving sustainable growth.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-6 animate-fade-in-up animation-delay-200">
              Our team is led by accomplished <strong>CA, ACCA, and CPA-qualified professionals</strong> alongside seasoned legal and financial advisors. 
              With over <strong>8+ years of collective experience</strong> across multinational corporations and consulting practices, we combine 
              <span className="font-semibold">technical expertise, regulatory insight, and practical problem-solving</span> to deliver value-driven, growth-focused outcomes for our clients.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              At Finact, we go beyond providing services—we act as <strong>long-term partners</strong> committed to guiding businesses through today’s dynamic regulatory environment with 
              <span className="font-semibold">precision, integrity, and strategic vision</span>.
            </p>
          </div>

          {/* Right: Default Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About Finact"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg animate-fade-in-right"
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Experience */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 transform hover:-translate-y-1 animate-slide-up">
            <FaBriefcase className="text-blue-600 text-4xl sm:text-5xl mx-auto mb-4" />
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              <CountUp end={8} duration={2.5} suffix="+" />
            </h3>
            <p className="text-gray-600 mt-2 text-base sm:text-lg">Years of Expertise</p>
          </div>

          {/* Professionals */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 transform hover:-translate-y-1 animate-slide-up animation-delay-200">
            <FaUsers className="text-green-600 text-4xl sm:text-5xl mx-auto mb-4" />
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              <CountUp end={100} duration={2.5} suffix="+" />
            </h3>
            <p className="text-gray-600 mt-2 text-base sm:text-lg">Qualified Professionals</p>
          </div>

          {/* Partners */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 transform hover:-translate-y-1 animate-slide-up animation-delay-400">
            <FaHandshake className="text-purple-600 text-4xl sm:text-5xl mx-auto mb-4" />
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              <CountUp end={450} duration={2.5} suffix="+" />
            </h3>
            <p className="text-gray-600 mt-2 text-base sm:text-lg">Trusted Global Clients</p>
          </div>
        </div>
      </section>

      {/* Custom Tailwind Animations */}
      <style jsx>{`
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

export default About;