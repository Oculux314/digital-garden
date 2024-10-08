"use client";
import { searchForUser } from '@/routes/userRoute';
import React, { useState } from 'react';
import mgpic from '@/img/magnifying glass.png';
import Image from 'next/image';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    const users = await searchForUser(query)
    console.log('Searching for:', query);
    console.log(users);
  };

  return (
        // <div className="flex items-center justify-center p-4 bg-green-100 min-h-screen">
        <div>
          <input
            type="text"
            /* style={{ fontFamily: "'Courier New', sans-serif" }} */
            placeholder="Search Username..."
            className="search-button px-4 py-2 bg-white-500 text-black text-sm font-bold rounded-md hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={query}
            onChange={handleInputChange}
          />
          <Image
              src={mgpic}
              alt="Search Icon"
              className="w-6 h-6 inline absolute right-10 mt-[5px]" 
            />
        </div>
  );
};

export default SearchBar;