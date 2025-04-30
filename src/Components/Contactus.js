import React from "react";
import { useTheme } from "./ThemeProvider"; // Importing the theme context

const ContactUs = () => {
  const { theme } = useTheme(); // Access the current theme ('light' or 'dark')

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } min-h-screen flex flex-col items-center px-6 py-16`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-gray-800"
        } text-5xl font-extrabold mb-6 text-center`}
      >
        Contact Us
      </h1>
      <p
        className={`${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        } text-lg text-center mb-12 max-w-2xl leading-relaxed`}
      >
        We're here to help! Whether you have a question about your order, feedback, or just want to say hello — reach out to us and we'll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Contact Form */}
        <form
          className={`${
            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          } p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300`}
        >
          <div className="mb-6">
            <label
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } block font-medium mb-2`}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400`}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } block font-medium mb-2`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400`}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } block font-medium mb-2`}
            >
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message..."
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400`}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Support Info */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          } flex flex-col justify-center p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300`}
        >
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } text-3xl font-bold mb-6 text-center`}
          >
            Get in Touch
          </h2>

          <div className="mb-6">
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } mb-2 text-xl font-medium`}
            >
              Customer Support Email:
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-800"
              } text-lg font-semibold`}
            >
              support@quickbite.com
            </p>
          </div>

          <div className="mb-6">
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } mb-2 text-xl font-medium`}
            >
              Helpline Number:
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-800"
              } text-lg font-semibold`}
            >
              +91 98765 43210
            </p>
          </div>

          <div>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } mb-2 text-xl font-medium`}
            >
              Office Address:
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-100" : "text-gray-800"
              } text-lg font-semibold`}
            >
              5th Floor, Tech Park, Bengaluru, India
            </p>
          </div>
        </div>
      </div>

      <p
        className={`${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        } text-sm mt-16`}
      >
        © 2025 QuickBite. All rights reserved.
      </p>
    </div>
  );
};

export default ContactUs;
