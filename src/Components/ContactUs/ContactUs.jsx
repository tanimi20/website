import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 font-lexend">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
        {/* Image Section */}
        <div className="relative flex justify-center items-center h-full animate-slide-up">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Customer Support"
            className="w-full max-w-md lg:max-w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl pointer-events-none"></div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center animate-slide-up animation-delay-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4 uppercase tracking-tight">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
            Have questions about our services or need assistance? We're here to help. Fill out the form below, and our team will get back to you promptly.
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white shadow-sm"
                required
              />
              <span className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 transition-all duration-300">
                Name
              </span>
            </div>

            {/* Country */}
            <div className="relative">
              <input
                type="text"
                placeholder="Country*"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white shadow-sm"
                required
              />
              <span className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 transition-all duration-300">
                Country
              </span>
            </div>

            {/* Email */}
            <div className="relative sm:col-span-2">
              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white shadow-sm"
                required
              />
              <span className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 transition-all duration-300">
                Email
              </span>
            </div>

            {/* Phone */}
            <div className="relative sm:col-span-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white shadow-sm"
              />
              <span className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 transition-all duration-300">
                Phone Number
              </span>
            </div>

            {/* Message */}
            <div className="relative sm:col-span-2">
              <textarea
                rows="6"
                placeholder="Message*"
                className="w-full border border-gray-200 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white shadow-sm"
                required
              ></textarea>
              <span className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-500 transition-all duration-300">
                Message
              </span>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 uppercase tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;