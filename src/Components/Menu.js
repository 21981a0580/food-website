import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useTheme } from "./ThemeProvider"; // Importing the theme context
import MenuCategory from "./MenuCategory";

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
  const categories=menuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
        c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


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
        {categories.map((category) =>(
          <MenuCategory key={category?.card?.card?.data?.title} data={category?.card?.card}/>
        ))}
      </div>

     
    </div>
  );
};

export default Menu;
