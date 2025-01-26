import React, { useState } from 'react';

const MobileSidebar: React.FC = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="absolute inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="w-64 bg-white h-full shadow-lg p-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button
          className="w-full text-left px-4 py-2 hover:bg-gray-100 mt-2"
          onClick={toggleCategory}
        >
          Categories {isCategoryOpen ? '-' : '+'}
        </button>
        {isCategoryOpen && (
          <div className="pl-4">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Electronics</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Clothing</a>
            <button className="block px-4 py-2 hover:bg-gray-100" onClick={toggleCategory}>
              More
            </button>
            <div className="pl-4">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Subcategory 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Subcategory 2</a>
            </div>
          </div>
        )}
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 mt-2">Deals</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
      </div>
    </div>
  );
};

export default MobileSidebar;
