"use client";
import { PlantType } from "@/models/plant";
import InfoComponent from "./info";
import Plant from "./plant";
import { useAppContext } from "@/app/context";
import { useEffect, useState } from "react";
import Image from "next/image";
import CardImg from "@/img/card.jpg";

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
        className="relative border-black border-2 py-16 flex justify-center rounded-lg m-1"
      >
        <Image src={CardImg} alt="" layout="fill" className="rounded-lg" />
        {plant && <Plant plant={plant} />}
      </div>
      <div className="hidden group-hover:block">
        <InfoComponent />
      </div>
    </div>
  );
};

export default PlantCard;
