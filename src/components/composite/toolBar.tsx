"use client";
import Tool from "../tool";

function shovel() {}

function water() {
  console.log("black men kissing andy xu baba");
}

export default function ToolBar() {
  return (
    <div className="top-4 left-20 flex gap-4 p-4 border border-black rounded-lg bg-yellow-100 mt-5">
      <Tool image="/k.png" name="Shovel" onClick={shovel} />
      <Tool image="/k.png" name="Water" onClick={water} />
    </div>
  );
}
