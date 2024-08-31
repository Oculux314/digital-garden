import { PlantType } from "@/models/plant";

export type PlantProps = {
  plant: PlantType;
};

const Plant = ({ plant }: PlantProps) => {
  return (
    <div className="">
      <div className="border border-black">insert plant image here</div>
      <div>this plant is on growth stage: {plant.stage}</div>
      <div>this plant last watered {plant.lastWatered.toISOString()}</div>
    </div>
  );
};

export default Plant;
