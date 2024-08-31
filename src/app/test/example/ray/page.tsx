"use client";
import PlantCard from "@/components/plantCard";
import { PlantType } from "@/models/plant";

const plants: PlantType[] = [
  { id: "1", name: "Rose", type: "Flower", stage: 2, water: true },
  { id: "1", name: "Tulip", type: "Flower", stage: 1, water: false },
  { id: "1", name: "Cactus", type: "Succulent", stage: 3, water: true },
  { id: "1", name: "Fern", type: "Fern", stage: 2, water: false },
  { id: "1", name: "Sunflower", type: "Flower", stage: 4, water: true },
  { id: "1", name: "Bamboo", type: "Grass", stage: 2, water: true },
  { id: "1", name: "Lavender", type: "Herb", stage: 1, water: false },
  { id: "1", name: "Orchid", type: "Flower", stage: 3, water: true },
  { id: "1", name: "Mint", type: "Herb", stage: 1, water: true },
];

export default function RayPage() {
  return (
    <div className="px-16">
      <div className="grid grid-cols-3">
        {plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </div>
    </div>
  );
}
