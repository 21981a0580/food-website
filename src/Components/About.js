import React from 'react';
import { useTheme } from './ThemeProvider'; // Make sure the path is correct

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-orange-100 via-white to-yellow-100 text-gray-800'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
      }`}
    >
      <h1 className="text-5xl font-extrabold mb-8 tracking-tight">About Us</h1>

      <p className="text-xl text-center max-w-3xl mb-14 leading-relaxed">
        Welcome to <span className="font-bold text-orange-500">QuickBite</span> — your trusted food delivery partner. 
        Connecting you with your favorite restaurants and delivering meals fresh and fast to your doorstep. 
        Whether it's breakfast cravings or late-night snacks, QuickBite makes ordering simple, reliable, and lightning-fast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {[
          {
            title: 'Wide Range of Choices',
            desc: 'Discover an extensive variety of cuisines and restaurants — all in one app, curated just for you.',
          },
          {
            title: 'Fast & Fresh Delivery',
            desc: 'Our dedicated fleet ensures your meals arrive hot, fresh, and always on time.',
          },
          {
            title: 'Trusted by Thousands',
            desc: 'Join millions who trust QuickBite every day for a delightful and seamless delivery experience.',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 backdrop-blur-md ${
              theme === 'light' ? 'bg-white/60 text-gray-800' : 'bg-white/10 text-white border border-white/20'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-sm mt-16 text-gray-400 dark:text-gray-500">
        © 2025 QuickBite. All rights reserved.
      </p>
    </div>
  );
};

export default About;
