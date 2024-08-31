"use client";
import { PlantType } from "@/models/plant";
import InfoComponent from "./info";
import Plant from "./plant";
import { useAppContext } from "@/app/context";
import { waterPlant } from "@/routes/userRoute";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export type PlantCardProps = {
  plant: PlantType | null;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  const context = useAppContext();
  const [shouldDelete, setShouldDelete] = useState(false);

  const handlePlantClick = () => {
    if (context.state.toolSelector === "shovel" && plant) {
      context.deletePlant(plant.id);
      context.selectTool("unselected");
    }
    if (context.state.toolSelector === "water" && plant) {
      waterPlant(user.id, plant.id);
      context.selectTool("unselected");
    }
  };

  const wateringPlant = () => {};

  useEffect(() => {
    if (shouldDelete && plant) {
      setShouldDelete(false);
    }
  }, [context.state.toolSelector, shouldDelete, plant, context]);

  return (
    <div className="group ">
      <div
        onClick={handlePlantClick}
        className="border-black border py-16 flex justify-center rounded-lg m-1"
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
