import { useEffect, useState } from "react";
import { RES_URL } from "../utils/Constants";
import Card from "./Card";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider"; // Ensure this is defined and returns { theme }

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { theme } = useTheme(); // dark | light

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    const resList =
      json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];
    setRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  const handleSearch = () => {
    const query = searchText.trim().toLowerCase();
    if (query === "") {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((res) => {
        const cuisines = res?.card?.card?.info?.cuisines;
        return (
          Array.isArray(cuisines) &&
          cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(query)
          )
        );
      });
      setFilteredRestaurants(filtered);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className={`flex flex-col items-center justify-center min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
        <h1 className="text-3xl font-semibold mb-4">You're Offline</h1>
        <p className="text-lg">Please check your internet connection and try again.</p>
      </div>
    );
  }

  if (filteredRestaurants.length === 0) return <Shimmer />;

  return (
    <div className={`min-h-screen px-4 py-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Search Input */}
      <div className="mb-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
        <input
          type="text"
          placeholder="Search food item..."
          className={`border px-3 py-2 rounded w-72 sm:w-80 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-gray-900 border-gray-400"}`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredRestaurants
          .filter((res) => res?.card?.card?.info?.id)
          .map((res) => {
            const id = res.card.card.info.id;
            return (
              <Link key={id} to={"/restaurants/" + id}>
                <Card data={res} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
