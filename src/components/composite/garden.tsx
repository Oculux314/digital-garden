"use client";
import PlantCard from "@/components/plantCard";
import { PlantType } from "@/models/plant";
import Plant from "@/components/plant";
import { useAppContext } from "@/app/context";

const Garden = () => {
  const context = useAppContext();
  const plants = context.state.plants;
  return (
    <div className="px-16 mt-8">
      <div className="grid grid-cols-3">
        {plants.map((plant, index) => {
          return (
            <div key={index} className="col">
              <PlantCard key={index} plant={plant} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Garden;
