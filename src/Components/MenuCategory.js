import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory =(data)=>{
    const[showitems,setshowItems]= useState(false);
    const handleClick=()=>{
        setshowItems(!showitems);
    }
    return (
        <div>
            <div className="w-full bg-gray-20 shadow-lg p-6 flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="">{data?.data?.title}
                ({data?.data?.itemCards.length})
                </span>
                <span>⬇️</span>
               
            </div>
            {showitems && <ItemList items={data?.data?.itemCards}/>}

        </div>
    )
    
}
export default MenuCategory;