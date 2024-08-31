import { PlantType } from "@/models/plant";
import Image from "next/image";

export type PlantProps = {
  plant: PlantType;
};

const Plant = ({ plant }: PlantProps) => {
  const { id, name, type, lastWatered, stage } = plant;

  return (
    <Image src={plant.image} alt={plant.name} />
    // <div className="fixed mt-4 ml-4 bg-white">
    //   <div className="border border-black">insert plant image here</div>
    //   <div>this plant is on growth stage: {plant.stage}</div>
    //   <div>this plant last watered {plant.lastWatered.toISOString()}</div>
    // </div>
  );
};

export default Plant;
