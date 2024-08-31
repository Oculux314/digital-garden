"use client";
import { useAppContext } from "@/app/context";
import Tool from "../tool";

function water() {
  console.log("");
}

export default function ToolBar() {
  const context = useAppContext();
  function shovel() {
    console.log(context.toolSelector);
  }
  return (
    <div className="top-4 left-20 flex gap-4 p-4 border border-black rounded-lg bg-yellow-100 mt-5">
      <Tool image="/k.png" name="Shovel" onClick={shovel} />
      <Tool image="/k.png" name="Water" onClick={water} />
    </div>
  );
}
