import { PlantType } from "@/models/plant";

export type PlantCardProps = {
  plant: PlantType;
};

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <div className="border-black border p-8 flex justify-center rounded-lg gap-4">
      Plant Card
    </div>
  );
};

export default PlantCard;
