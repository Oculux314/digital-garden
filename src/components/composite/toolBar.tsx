"use client";
import { useAppContext } from "@/app/context";
import shovelicon from "@/img/toolicons/shovel.png";
import wateringcanicon from "@/img/toolicons/wateringcan.png";
import Tool from "../tool";

export default function ToolBar() {
  const context = useAppContext();

  function shovel() {
    context.selectTool("shovel");
  }

  function water() {
    context.selectTool("water");
  }

  return (
    // <div className="float-right flex gap-4 p-4 rounded-lg bg-cyan-200 mt-5 w-48">
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-cyan-200 mt-6 ml-5 w-24">
      <Tool image={shovelicon} name="Shovel" onClick={shovel} />
      <Tool image={wateringcanicon} name="Water" onClick={water} />
    </div>
  );
}
