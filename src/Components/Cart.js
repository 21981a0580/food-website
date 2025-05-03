import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return (
            cartItems.reduce((total, item) => {
                const price = item?.card?.info?.price || 0;
                return total + price;
            }, 0) / 100
        ); // Convert paise to rupees
    };

    const handleOrderNow = () => {
        alert("Thank you for your order! 🛍️");
        dispatch(clearCart());
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg mt-8 transition-colors">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 text-lg">Your cart is empty.</p>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Total Items: {cartItems.length}
                        </h2>
                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Clear Cart
                        </button>
                    </div>

                    <ItemList items={cartItems} />

                    <div className="mt-6 text-right space-y-4">
                        <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                            Total Price: ₹{getTotalPrice().toFixed(2)}
                        </h3>
                        <button
                            onClick={handleOrderNow}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                        >
                            Order Now
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
