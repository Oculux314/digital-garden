"use client";
import Tool from "../tool";

function shovel() {}

function water() {}

// function fertilizer() {

// }

export default function ToolBar() {
  return (
    <div className="top-4 left-20 flex gap-4 p-4 border-4 border-black rounded-lg bg-yellow-100 mt-5">
      <Tool src="shovel.png" name="Shovel" f={shovel} />
      <Tool src="water.png" name="Water" f={water} />
      {/* <Tool src="fertilizer.png" name="Fertilizer" f={fertilizer}/> */}
    </div>
  );
}
