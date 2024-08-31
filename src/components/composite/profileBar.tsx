"use client";
import React from "react";

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
    <div
      className="flex-col gap-4 p-4 rounded-lg bg-cyan-200 mt-6 mr-5 w-24 h-100 overflow-y-auto max-h-screen"
    >
      <ul>
        {profiles.map((profile, index) => (
          <li key={index} className="mb-2">
            <a href={profile.url}>
              <img
                src={profile.src}
                alt={profile.name}
                className="w-22 h-22 rounded-lg"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}