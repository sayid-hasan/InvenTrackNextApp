"use client";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative w-full md:block hidden ">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        {/* search  icon from lucide */}
        <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="text"
        id="search"
        className="bg-gray-50 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full ps-10 px-1.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none hover:w-[150%] origin-center transition-all duration-1000 trans"
        placeholder="Search in Customers..."
        required
      />
    </div>
  );
};

export default SearchInput;
