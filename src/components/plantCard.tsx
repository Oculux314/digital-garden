import { PlantType } from "@/models/plant";
import InfoComponent from "./info";
import { useState } from "react";
export type PlantCardProps = {
  plant: PlantType;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  const handleClick = () => {
    return null;
  };
  return (
    <div
      onClick={handleClick}
      className="border-black border py-16 flex justify-center rounded-lg m-1"
    >
      Plant Card
      <div className="hidden">
        <InfoComponent />
      </div>
    </div>
  );
};

export default PlantCard;
