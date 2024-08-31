"use client";
import { PlantType } from "@/models/plant";
import InfoComponent from "./info";
import Plant from "./plant";
import { useAppContext } from "@/app/context";
import { waterPlant } from "@/routes/userRoute";
import { notFound } from "next/navigation";

export type PlantCardProps = {
  plant: PlantType | null;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  const context = useAppContext();
  const deletePlant = () => {
    if (context.state.toolSelector == "shovel" && plant) {
      console.log("deleted");
      context.selectTool("unselected");
      context.deletePlant(plant.id);
    }
  };

  const wateringPlant = () => {
    if (context.state.toolSelector == "water" && plant) {
      const user = context.state.session?.user;
      if (!user) {
        return notFound();
      }
      console.log("watered");
      waterPlant(user.id, plant.id);
    }
  };
  return (
    <div className="group ">
      <div
        onClick={deletePlant}
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
