"use client";
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
        // <div className="flex items-center justify-center p-4 bg-green-100 min-h-screen">
        <div>
          <input
            type="text"
            /* style={{ fontFamily: "'Courier New', sans-serif" }} */
            placeholder="Search Username..."
            className="search-button px-4 py-2 bg-white-500 text-black text-sm font-bold rounded-l-md hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={query}
            onChange={handleInputChange}
          />
          <button
            className="search-button px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-r-md hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            /*style={{ fontFamily: "'Courier New', sans-serif" }} */
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
  );
};

export default SearchBar;