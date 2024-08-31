import Image from "next/image";
import { useState } from "react";
// import image from "@/img/placeholderimg.jpg";
import image from "@/img/k.png";

export default function InfoComponent() {
  return (
    <div className="flex absolute">
      {/* Plant Image Component */}
      <div className="relative border border-black w-[100px] h-[120px] rounded-lg p-8 col justify-items-center">
        <Image
          src={image}
          alt=""
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
      </div>

      {/* Info Component */}
      <div className="border bg-white border-black w-[200px] h-[120px] pl-4 pt-4 rounded-lg col justify-center">
        <h1 className="mb-4 font-bold text-red-500">Flower Name</h1>
        <p>Placeholder text for this plant</p>
      </div>
    </div>
  );
}
