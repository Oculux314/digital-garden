import { PlantType } from "@/models/plant";

export type PlantCardProps = {
  plant: PlantType;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <div className="border-black border py-36 flex justify-center rounded-lg m-1">
      Plant Card
    </div>
  );
};

export default PlantCard;
