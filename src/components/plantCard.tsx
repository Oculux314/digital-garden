"use client";
import { useAppContext } from "@/app/context";
import CardImg from "@/img/card.jpg";
import { PlantType } from "@/models/plant";
import { waterPlant } from "@/routes/userRoute";
import Image from "next/image";
import InfoComponent from "./info";
import Plant from "./plant";

export type PlantCardProps = {
  plant: PlantType | null;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  const context = useAppContext();
  const user = context.state.session?.user;

  const handlePlantClick = () => {
    if (context.state.selectedTool === "shovel" && plant) {
      context.deletePlant(plant.id);
    }
    if (context.state.selectedTool === "water" && plant && user?.id) {
      waterPlant(user.id, plant.id);
    }
  };

  return (
    <div className="group w-[200px] h-[200px] relative border-black border-4 aspect-square rounded-lg m-1">
      <Image
        src={CardImg}
        alt="Card background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-lg"
      />
      <div
        onClick={handlePlantClick}
        className="relative z-10 flex justify-center items-center"
      >
        {plant && <Plant plant={plant} />}
      </div>
      <div className="hidden group-hover:block absolute bottom-0 left-0 right-0">
        <InfoComponent />
      </div>
    </div>
  );
};

export default PlantCard;
