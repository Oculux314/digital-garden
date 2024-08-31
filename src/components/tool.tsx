"use client"
import React, { FC } from 'react';

type ToolProps = {
  src: string;
  name: string;
  f: () => void;
}

const Tool: FC<ToolProps> = ({src, name, f}) => {
  function handleClick() {
    alert(name);
    f();
  }

  return (
    <button onClick={handleClick} className="w-16 h-16 flex items-center justify-center border-none rounded-lg bg-teal-600 hover:bg-teal-800">
      <img src={src} alt={name}/>
    </button>
  );
}

export default Tool;
