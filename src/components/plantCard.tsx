"use client";
import { useAppContext } from "@/app/context";
import CardImg from "@/img/card.jpg";
import { PlantType } from "@/models/plant";
import { getUserByEmail, stealPlant, waterPlant } from "@/routes/userRoute";
import Image from "next/image";
import InfoComponent from "./info";
import Plant from "./plant";
import { User } from "next-auth";

export type PlantCardProps = {
  plant: PlantType | null;
  user: string;
};

const PlantCard = ({ plant, user }: PlantCardProps) => {
  const context = useAppContext();
  const loggedInUser = context.state.session?.user?.email!;

  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", loggedInUser);

  const handlePlantClick = () => {
    if (context.state.selectedTool === "shovel" && plant) {
      console.error(loggedInUser);
      console.error(user);

      if (loggedInUser === user) {
        context.deletePlant(plant.id);
      } else {
        context.deletePlant(plant.id, user);
      }
    }
    if (context.state.selectedTool === "water" && plant && user) {
      waterPlant(user, plant.id);
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
