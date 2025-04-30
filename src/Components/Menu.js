import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useTheme } from "./ThemeProvider"; // Importing the theme context

const Menu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();
  const { theme } = useTheme(); // Access the current theme ('light' or 'dark')

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(RES_MENU + resId);
      const json = await data.json();
      setMenuInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const restaurantInfo = menuInfo?.cards?.[2]?.card?.card?.info;
  const menuList =
    menuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((card) => card?.card?.card?.itemCards)
      ?.flatMap((card) => card?.card?.card?.itemCards);

  if (!restaurantInfo || !menuList) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating } = restaurantInfo;

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } max-w-4xl mx-auto p-6 mt-10 rounded-lg shadow-md`}
    >
      {/* Restaurant Info Section */}
      <div className="mb-10">
        <h1
          className={`${
            theme === "dark" ? "text-white" : "text-gray-800"
          } text-3xl font-bold`}
        >
          {name}
        </h1>
        <p
          className={`${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } mt-1`}
        >
          <span className="font-semibold">Cuisines:</span> {cuisines?.join(", ")}
        </p>
        <p
          className={`${
            theme === "dark" ? "text-yellow-400" : "text-yellow-600"
          } font-semibold mt-1`}
        >
          ⭐ Average Rating: {avgRating}
        </p>
      </div>

      {/* Divider */}
      <hr
        className={`${
          theme === "dark" ? "border-gray-600" : "border-gray-300"
        } mb-10`}
      />

      {/* Menu List Section */}
      <div>
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-gray-700"
          } text-2xl font-semibold mb-6`}
        >
          Menu
        </h2>
        <ul className="space-y-6">
          {menuList.map((itemCard, index) => {
            const item = itemCard?.card?.info;
            return (
              <li
                key={item?.id || index}
                className={`${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } p-4 rounded shadow-sm hover:shadow-md transition duration-200`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      } text-lg font-medium`}
                    >
                      {item?.name}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      } text-sm`}
                    >
                      ₹{(item?.price || item?.defaultPrice) / 100}
                    </p>
                  </div>
                  {item?.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover ml-4"
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Background for Menu Opening in Dark Mode */}
      <div
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        } p-4 rounded-lg shadow-sm mt-10`}
      >
        {/* This section can be used for displaying additional details or menu options in the future */}
      </div>
    </div>
  );
};

export default Menu;
