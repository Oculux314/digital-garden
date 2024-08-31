import Image from "next/image";
import { useState } from "react";
import image from "@/img/placeholderimg.jpg";

export default function InfoComponent() {
  return (
    <div className="flex">
      {/* Plant Image Component */}
      <div className="relative border border-black w-[400px] h-[500px] rounded-lg p-8 col justify-items-center">
        <Image src={image} alt="" objectFit="cover" layout="fill" className="rounded-lg"/>
      </div>

      {/* Info Component */}
      <div className="border border-black w-[400px] h-[500px] rounded-lg p-8 col justify-items-center">
        <h1 className="mb-4 font-bold text-red-500">Flower Name</h1>
        <p>Placeholder text for this plant
        </p>
      </div>
    </div>
  );
}
