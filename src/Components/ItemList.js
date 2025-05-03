import { ITEM_LIST_URL } from "../utils/Constants";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem=(item)=>{
       dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) => {
                const info = item.card.info;
                return (
                    <div
                        key={info.id}
                        className="p-2 m-2 border-gray-200 border-b-2 dark:border-gray-700 text-left flex justify-between"
                    >
                        {/* Left Side - Text */}
                        <div className="w-8/12">
                            <div className="py-2">
                                <span className="font-semibold text-gray-800 dark:text-gray-100">
                                    {info.name}
                                </span>
                                <span className="ml-4 text-gray-700 dark:text-gray-200">
                                    ₹{(info.price || info.defaultPrice) / 100}
                                </span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                {info.description}
                            </p>
                        </div>

                        {/* Right Side - Image and Button */}
                        <div className="w-4/12 relative flex justify-end">
                            {info.imageId && (
                                <img
                                    src={ITEM_LIST_URL + info.imageId}
                                    alt={info.name}
                                    className="w-6/12 h-24 object-cover rounded"
                                />
                            )}
                            <button
                                className="absolute bottom-1 right-1 bg-black text-white px-1 py-1 text-sm rounded hover:bg-sky-600 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                                  onClick={ ()=> handleAddItem(item)}
                                 
                            >
                                ADD +
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
