"use client";
import Tool from "../tool";
import { useState } from "react";

function water() {
  console.log("");
}

export default function ToolBar() {
  const [grab, setGrab] = useState(false);
  function shovel() {
    setGrab(true);
  }
  return (
    <div className="top-4 left-20 flex gap-4 p-4 border border-black rounded-lg bg-yellow-100 mt-5">
      <Tool image="/k.png" name="Shovel" onClick={shovel} />
      <Tool image="/k.png" name="Water" onClick={water} />
    </div>
  );
}
