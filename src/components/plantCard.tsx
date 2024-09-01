"use client";
import { useAppContext } from "@/app/context";
import { PlantType } from "@/models/plant";
import { waterPlant } from "@/routes/userRoute";
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
    <div className="group">
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
