import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const Title = () => {
  const { theme, toggleTheme } = useTheme(); // Ensure this hook is implemented correctly
  const [bt_name, setName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(bt_name); // Logs current login/logout state
  }, [bt_name]);

  const btton = () => {
    setName((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className={`p-4 sticky top-0 z-50 ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"} shadow-md flex justify-between items-center border-b`}>
      <img
        alt="Logo"
        src="https://static.vecteezy.com/system/resources/previews/018/731/268/original/modern-food-company-logo-design-template-home-made-food-logo-template-typographic-food-logo-design-creative-food-word-logo-design-cooking-typographic-design-vector.jpg"
        className="w-18 h-14"
      />

      <nav className="flex items-center gap-6">
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:underline cursor-pointer font-black">Home</Link></li>
          <li><Link to="/about" className="hover:underline cursor-pointer font-black">About</Link></li>
          <li><Link to="/cart" className="hover:underline cursor-pointer font-black">Cart</Link></li>
          <li><Link to="/contact" className="hover:underline cursor-pointer font-black">Contact Us</Link></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="hover:scale-105 transition">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button className="ml-2 px-4 py-1 bg-slate-100 dark:bg-gray-700 rounded text-black dark:text-white" onClick={btton}>
            {bt_name}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`absolute top-16 left-0 w-full p-4 flex flex-col bg-white dark:bg-gray-800 md:hidden z-40`}>
          <Link to="/" className="py-2 font-black hover:underline">Home</Link>
          <Link to="/about" className="py-2 font-black hover:underline">About</Link>
          <Link to="/cart" className="py-2 font-black hover:underline">Cart</Link>
          <Link to="/contact" className="py-2 font-black hover:underline">Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Title;
