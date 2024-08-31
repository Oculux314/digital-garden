"use client";
import { useAppContext } from "@/app/context";
import Tool from "../tool";
import shovelicon from "@/img/toolicons/shovel.png";
import wateringcanicon from "@/img/toolicons/wateringcan.png";

function water() {
  console.log("");
}

export default function ToolBar() {
  const context = useAppContext();
  function shovel() {
    context.selectTool("shovel");
  }
  return (
    <div className="top-4 left-20 flex gap-4 p-4 border border-black rounded-lg bg-yellow-100 mt-5">
      <Tool image={shovelicon} name="Shovel" onClick={shovel} />
      <Tool image={wateringcanicon} name="Water" onClick={water} />
    </div>
  );
}
