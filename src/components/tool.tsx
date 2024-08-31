"use client";

import Image, { StaticImageData } from "next/image";

type ToolProps = {
  image: StaticImageData;
  name: string;
  onClick: () => void;
};

const Tool = ({ image, name, onClick }: ToolProps) => {
  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className="w-16 h-16 flex items-center justify-center rounded-lg bg-green-300 hover:bg-green-400"
    >
      <Image src={image} alt={name} width={58} height={58} />
    </button>
  );
};

export default Tool;
