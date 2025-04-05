import React from 'react';

interface MenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  options?: Array<string>;
}

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 duration-500">
      {items?.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow hover:shadow-lg p-4 transition-transform transform hover:scale-105"
        >
          {/* Details */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold capitalize">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-1 font-sk">{item.description}</p>
            <span className="text-[#893340] font-bold text-lg mt-2 block font-sk">
              {`₦ ${item.price}`}
            </span>
            {item.options && (
              <div className="text-[#893340] font-bold text-sm mt-2 block font-sk">
                {item.options.map((option, i) => (
                  <div key={i} className="text-wrap">
                    {option} {/* Each option displayed on a new line */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;