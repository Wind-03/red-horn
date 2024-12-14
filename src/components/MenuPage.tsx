"use client"
import { useState } from "react";
import MenuGrid from "./MenuGrid"; // Grid component for displaying items
// import menuData from "../Data/MenuData.json"; // Your menu data

// interface MenuItem {
//   id: number;
//   name: string;
//   price: string;
//   description: string;
// }

// interface MenuData {
//   food: {
//     [key: string]: MenuItem[];
//   };
//   drinks: {
//     [key: string]: MenuItem[];
//   };
// }

import menuData from "../Data/MenuData.json";


const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState<"food" | "drinks">("food");
  const categories =
    activeMenu === "food"
      ? ["appetizers","burgers" , "main course", "pasta", "salads", "sides", "Sides: Plant-Based Alternatives", "grills", "soups", "platters", "lean selection"]
      : ["classic cocktails", "frozen cocktails", "signature cocktails", "shooters", "tiki cocktails", "mocktails", "milkshakes", "smoothies", "Park Juice", "Soft Drink", "Energy Drink", "Beer", "Aparatices", "Cream Liquor", "Rum", "Vodka", "Gin", "Tequila", "Sparkling Wine","Whiskey","Rossi Wine", "White Wine", "Red Wine", "Freshly Squeezed Juices" ,"shots", "wines",];

  return (
    <div className="p-6 max-w-screen-2xl mx-auto relative mb-12">
      {/* Menu Buttons */}
      <div className="flex justify-center mb-4 space-x-4 sticky top-10 z-10 mx-auto  bg-slate-50 w-fit p-3 shadow-lg rounded-md">
        <button
          onClick={() => setActiveMenu("food")}
          className={`px-4 py-2 rounded-lg font-semibold  ${
            activeMenu === "food"
              ? "bg-[#893340] text-white duration-500"
              : ""
          }`}
        >
          Food Menu
        </button>
        <button
          onClick={() => setActiveMenu("drinks")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeMenu === "drinks"
              ? "bg-[#893340] text-white duration-500"
              : ""
          }`}
        >
          Drinks Menu
        </button>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category} className="mt-24 ">
            {/* Category Title */}
            <h2 className="text-xl font-bold capitalize mb-12 text-center bg-[#2d1b1b] rounded-md mx-auto px-3 py-2 text-white w-fit duration-500">
              {category.replace(/([A-Z])/g, " $1").toLowerCase()}
            </h2>

            {/* Menu Grid for Category Items */}
            <MenuGrid
              items={menuData[activeMenu][category as keyof typeof menuData[typeof activeMenu]]}
            />
          </div>
        ))}
      </div>

      {/* Menu Grid */}
    </div>
  );
};

export default MenuPage;
