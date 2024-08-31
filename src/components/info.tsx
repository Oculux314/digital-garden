import { useState } from "react";

export default function InfoComponent() {
  return (
    <div className="border border-black w-[40%] rounded-lg p-8 col justify-items-center">
      <h1 className="mb-4 font-bold text-red-500">Info component</h1>
      <img className="mb-2" alt="image placeholder" />
      <p>placeholder text for this plant</p>
    </div>
  );
}
