import { PlantType } from "@/models/plant";

export type PlantCardProps = {
  plant: PlantType;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  return <div className="border-black border">Plant Card</div>;
};

export default PlantCard;
