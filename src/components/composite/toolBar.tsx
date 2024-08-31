"use client";
import Tool from "../tool";
import { useState } from "react";

interface ToolBarProps {
  onSelect: (tool: string) => void;
}

function water() {
  console.log("black men kissing andy xu baba");
}

export default function ToolBar({ onSelect }: ToolBarProps) {
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
