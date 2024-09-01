"use client";
import { PlantType } from "@/models/plant";
import InfoComponent from "./info";
import Plant from "./plant";
import { useAppContext } from "@/app/context";
import { useEffect, useState } from "react";

export type PlantCardProps = {
  plant: PlantType | null;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  const context = useAppContext();
  const [shouldDelete, setShouldDelete] = useState(false);

  const handlePlantClick = () => {
    if (context.state.toolSelector === "shovel" && plant) {
      setShouldDelete(true);
      context.selectTool("unselected");
    }
  };

  useEffect(() => {
    if (shouldDelete && plant) {
      context.deletePlant(plant.id);
      setShouldDelete(false);
    }
  }, [context.state.toolSelector, shouldDelete, plant]);

  return (
    <div className="group ">
      <div
        onClick={handlePlantClick}
        className="border-black border-4 wh-full aspect-square py-16 flex justify-center rounded-lg m-1" 
      >
        {plant && <Plant plant={plant} />}
      </div>
      <div className="hidden group-hover:block">
        <InfoComponent />
      </div>
    </div>
  );
};

export default PlantCard;
