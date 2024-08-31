"use client";

import React from 'react';
import Image from 'next/image';
import mrflowerpoticon from "@/img/logos/mrflowerpoticonbig.png";
import digitalgardenlogo from "@/img/logos/digitalgardenlogo.png";
import SearchBar from './searchBar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-cyan-200 p-6 flex items-center">
      <div className="flex w-full items-center gap-4 mr-3">
        <Link className="flex gap-4 " href= "/">
            {/* Logo */}
            <Image src={mrflowerpoticon} alt="Logo" className="h-50 w-50" height={50} width={50} />
            {/* Icon */}
            <Image src={digitalgardenlogo} alt="Icon" className="h-100 w-300 ml-50" height={100} width={500} />
        </Link>
        <div className="grow text-right">
            <SearchBar/> 
        </div>
      </div>
    </header>
  );
}
