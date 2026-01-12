"use client";
import { useState } from "react";
import MenuGrid from "./MenuGrid";

import menuData from "../Data/MenuData.json";

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState<
    "food" | "drinks" | "house deals" | "shisha"
  >("food");
  const categories =
    activeMenu === "food"
      ? [
          "starter",
          "main courses",
          "rice dish",
          "chicken special",
          "soups",
          "sides",
          "desert",
          "pasta",
        ]
      : activeMenu === "house deals"
      ? ["unlimited cocktail deals"]
      : activeMenu === "shisha"
      ? ["shisha"]
      : [
          "classic cocktail",
          "signature cocktails",
          // "tiki cocktail",
          // "champagne cocktail",
          // "mocktail",
          "extra",
          "mexican premium cocktails [tequila base]",
          "tiki rum base cocktails",
          "martini classic",
          "classic mocktails [dry fruit mocktails]",
          "milkshake",
          "smoothies",
          "shots",
          "brandy",
          "whiskey",
          "tequila",
          "gin",
          "vodka",
          "rum",
          "cream liquor",
          "aperatives",
          "alcoholic wine",
          "non alcoholic wine",
          "beer",
          "energy drinks",
          "soft drinks",
          "juice",
        ];

  return (
    <div className="p-6 max-w-screen-2xl mx-auto relative mb-12">
      {/* Menu Buttons */}
      <div className="flex justify-center mb-4 space-x-4 sticky top-10 z-[1] mx-auto  bg-slate-50 w-fit p-3 shadow-lg rounded-md flex-wrap">
        <button
          onClick={() => setActiveMenu("food")}
          className={`px-4 py-2 rounded-lg font-semibold  ${
            activeMenu === "food" ? "bg-[#893340] text-white duration-500" : ""
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
        <button
          onClick={() => setActiveMenu("house deals")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeMenu === "house deals"
              ? "bg-[#893340] text-white duration-500"
              : ""
          }`}
        >
          House Deals
        </button>
        <button
          onClick={() => setActiveMenu("shisha")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeMenu === "shisha"
              ? "bg-[#893340] text-white duration-500"
              : ""
          }`}
        >
          Shisha
        </button>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category} className="mt-24 ">
            {/* Category Title */}
            <h2
              className={`text-xl font-bold capitalize mb-10 ${
                category === "Plant-based alternatives (100% Cauliflower)"
                  ? "-mt-16 mb-4 text-[#893340] bg-none"
                  : "bg-[#2d1b1b] text-white"
              } text-center rounded-md mx-auto px-3 py-2  w-fit duration-500`}
            >
              {category.replace(/([A-Z])/g, " $1").toLowerCase()}
            </h2>

            {/* Menu Grid for Category Items */}
            <MenuGrid
              items={
                menuData[activeMenu][
                  category as keyof (typeof menuData)[typeof activeMenu]
                ]
              }
            />
          </div>
        ))}
      </div>

      {/* Menu Grid */}
    </div>
  );
};

export default MenuPage;
