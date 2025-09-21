import React from "react";
import { FiUser, FiMail, FiPhone, FiGlobe, FiFileText, FiBriefcase } from "react-icons/fi";
import img from '../../assets/career.jpg';

const CareerForm = () => {
  return (
    <div className="bg-gradient-to-b  mt-20 from-white to-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 font-lexend">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch min-h-[600px]">
        
        {/* Image Section */}
        <div className="relative flex justify-center items-center h-full">
          <img
            src={img}
            alt="Career"
            className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl pointer-events-none"></div>
        </div>

        {/* Career Form Section */}
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4 uppercase tracking-tight">
            Apply Now
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed">
            Fill in your details and attach your resume. Our HR team will get in touch with you soon.
          </p>

          <form className="space-y-6 flex-grow">
            {/* Name */}
            <div className="relative">
              <FiUser className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
                required
              />
            </div>

            {/* Country */}
            <div className="relative">
              <FiGlobe className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Country*"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FiMail className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="Email*"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FiPhone className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
                required
              />
            </div>

            {/* Position */}
            <div className="relative">
              <FiBriefcase className="absolute top-4 left-4 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Position Applied For*"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
                required
              />
            </div>

            {/* Resume Upload */}
            <div className="relative flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
              <FiFileText className="text-gray-400 text-lg mr-3" />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full text-gray-600 cursor-pointer focus:outline-none"
                required
              />
            </div>

            {/* Cover Letter */}
            <div>
              <textarea
                rows="5"
                placeholder="Cover Letter / Additional Information*"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
