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
      setShouldDelete(true);
      context.selectTool("unselected");
    }
  };

  const wateringPlant = () => {
    if (context.state.toolSelector == "water" && plant) {
      const user = context.state.session?.user;
      if (!user || !user.id) {
        return notFound();
      }
      console.log("watered");
      waterPlant(user.id, plant.id);
      console.log(plant.lastWatered);
    }
  };
  useEffect(() => {
    if (shouldDelete && plant) {
      context.deletePlant(plant.id);
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
