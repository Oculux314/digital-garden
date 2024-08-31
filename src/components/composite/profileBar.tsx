"use client";
import React, { useState } from "react";

type Profile = {
  src: string;
  name: string;
  url: string;
}

type ProfileBarProps = {
  profiles: Profile[];
}

export default function ProfileBar({ profiles }: ProfileBarProps) {
  return (
    <>
      <div
        className={"top-0 self-stretch left-0 h-full bg-green-600 text-white p-4 shadow-lg transition-transform duration-300 w-32 translate-x-0"}
      >
        <ul>
          {profiles.map((profile, index) => (
              <li key={index} className="mb-2">
                <a href={profile.url}>
                  <img src={profile.src} alt={profile.name}/>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
