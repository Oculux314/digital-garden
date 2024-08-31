"use client"
import React, { FC } from 'react';

type ToolProps = {
  src: string;
  alt: string;
  f: () => void;
}

const Tool: FC<ToolProps> = ({src, alt, f}) => {
  return (
    <button onClick={f} className="w-16 h-16 flex items-center justify-center border-none rounded-lg bg-teal-600 hover:bg-teal-800">
      <img src={src} alt={alt}/>
    </button>
  );
}

export default Tool;
