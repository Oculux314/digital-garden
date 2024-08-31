import PlantCard from "@/components/plantCard";
import { PlantType } from "@/models/plant";

const plants: PlantType[] = [
  { name: "Rose", type: "Flower", stage: 2, water: true },
  { name: "Tulip", type: "Flower", stage: 1, water: false },
  { name: "Cactus", type: "Succulent", stage: 3, water: true },
  { name: "Fern", type: "Fern", stage: 2, water: false },
  { name: "Sunflower", type: "Flower", stage: 4, water: true },
  { name: "Bamboo", type: "Grass", stage: 2, water: true },
  { name: "Lavender", type: "Herb", stage: 1, water: false },
  { name: "Orchid", type: "Flower", stage: 3, water: true },
  { name: "Mint", type: "Herb", stage: 1, water: true },
];

export default function RayPage() {
  return (
    <div>
      {plants.map((plant, index) => (
        <PlantCard key={index} plant={plant} />
      ))}
    </div>
  );
}
