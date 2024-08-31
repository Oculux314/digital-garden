"use client";
import PlantCard from "@/components/plantCard";
import { PlantType } from "@/models/plant";
import Plant from "@/components/plant";
import { useAppContext } from "@/app/context";
import ToolBar from "./toolBar";
import ProfileBar from "./profileBar";

const Garden = () => {
  const context = useAppContext();
  const plants = context.state.plants;
  return (
    <div className="flex w-full h-full spacing justify-between items-start">
      <ProfileBar profiles={[]}/>
      <div className="aspect-square h-full grid grid-cols-3">
        {plants.map((plant, index) => {
          return (
            <div key={index} className="col">
              <PlantCard key={index} plant={plant} />
            </div>
          );
        })}
      </div>
      <ToolBar/>
    </div>
  );
};

export default Garden;
