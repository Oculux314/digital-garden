"use client";
import React, { useState } from "react";
// import Profile from "../profile";

type Profile = {
  src: string;
  name: string;
  url: string;
}

type ProfileBarProps = {
  profiles: Profile[];
}

export default function ProfileBar({ profiles }: ProfileBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProfilesBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full bg-green-800 text-white p-4 shadow-lg transition-transform duration-300 ${
          isOpen ? "w-32 translate-x-0" : "w-32 -translate-x-full"
        }`}
      >
        <ul>
          {/* <li className="mb-4 font-bold"></li> */}
          {profiles.map((profile, index) => (
              <li key={index} className="mb-2">
                <a href={profile.url}>
                  <img src={profile.src} alt={profile.name}/>
                </a>
              </li>
            ))}
        </ul>
      </div>
      {/* <button
        className={`fixed top-4 left-4 bg-green-800 text-white p-2 rounded transition-transform duration-300 ${
          isOpen ? "translate-x-[130px]" : "translate-x-0"
        }`}
        onClick={toggleProfilesBar}
        style={{ whiteSpace: "nowrap" }}
      >
        {isOpen ? "Close" : "Saved profiles"}
      </button> */}
    </div>
  );
}
