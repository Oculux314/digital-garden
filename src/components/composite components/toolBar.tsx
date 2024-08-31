"use client"
import Tool from "../tool";

function shovel() {

}

function water() {

}

// function fertilizer() {

// }

export default function ToolBar() {
  return (
    <div className="absolute top-4 left-20 flex gap-4 p-4 border-4 border-black rounded-lg bg-yellow-100 mt-5">
      <Tool src="shovel.png" alt="Shovel" f={shovel}/>
      <Tool src="water.png" alt="Water" f={water}/>
      {/* <Tool src="fertilizer.png" alt="Fertilizer" f={fertilizer}/> */}
    </div>
  );
}
