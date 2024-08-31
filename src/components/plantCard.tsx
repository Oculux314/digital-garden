"use client";
import { PlantType } from "@/models/plant";
import InfoComponent from "./info";
import Plant from "./plant";
import { useAppContext } from "@/app/context";

export type PlantCardProps = {
  plant: PlantType | null;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  const context = useAppContext();

  const deletePlant = () => {
    if (context.state.toolSelector == "shovel" && plant) {
      context.selectTool("unselected");
      context.deletePlant(plant.id);
      console.log("deleted and unselected");
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
