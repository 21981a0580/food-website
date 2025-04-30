import React from "react";
import { useTheme } from "./ThemeProvider"; // Importing the theme context

const Card = ({ data }) => {
  const restaurant = data?.card?.card?.info;
  const { theme } = useTheme(); // Access the current theme ('light' or 'dark')

  if (!restaurant) return null; // Gracefully handle empty/undefined data

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } mt-3 h-80 w-60 border rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out p-2 flex flex-col overflow-hidden`}
    >
      {/* Restaurant Image */}
      <img
        className="h-36 w-full object-cover rounded-xl"
        alt={restaurant?.name || "Restaurant food"}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
        loading="lazy"
      />

      {/* Details */}
      <div className="mt-3 flex flex-col justify-between h-full overflow-hidden">
        <h1 className="text-lg font-semibold truncate">{restaurant?.name}</h1>

        <h2
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } mt-1 overflow-hidden whitespace-nowrap text-ellipsis`}
        >
          {restaurant.cuisines?.join(", ")}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.845 1.417 8.264L12 19.771l-7.417 4.088L6 15.595 0 9.75l8.332-1.595z" />
          </svg>
          <span className="text-gray-800 text-sm">
            {restaurant.avgRating ?? "N/A"}
          </span>
        </div>

        {/* Delivery Time */}
        <h3
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          } mt-1`}
        >
          {restaurant.sla?.deliveryTime} Minutes
        </h3>
      </div>
    </div>
  );
};

export default Card;
