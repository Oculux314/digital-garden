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
    <div className="top-4 left-20 flex gap-4 p-4 rounded-lg bg-cyan-200 mt-5 w-48">
      <Tool image={shovelicon} name="Shovel" onClick={shovel} />
      <Tool image={wateringcanicon} name="Water" onClick={water} />
    </div>
  );
}
