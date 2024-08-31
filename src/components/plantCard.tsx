"use client";
import { PlantType } from "@/models/plant";
import InfoComponent from "./info";

export type PlantCardProps = {
  plant: PlantType;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <div className="group ">
      <div className="border-black border py-16 flex justify-center rounded-lg m-1">
        Plant Card
      </div>
      <div className="hidden group-hover:block">
        <InfoComponent />
      </div>
    </div>
  );
};

export default PlantCard;
