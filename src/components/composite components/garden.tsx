import PlantCard from "@/components/plantCard";
import { PlantType } from "@/models/plant";
import Plant from "@/components/plant";
const plants: PlantType[] = [
  { id: "1", name: "Rose", type: "Flower", stage: 2, lastWatered: new Date() },
  { id: "1", name: "Tulip", type: "Flower", stage: 1, lastWatered: new Date() },
  {
    id: "1",
    name: "Cactus",
    type: "Succulent",
    stage: 3,
    lastWatered: new Date(),
  },
  { id: "1", name: "Fern", type: "Fern", stage: 2, lastWatered: new Date() },
  {
    id: "1",
    name: "Sunflower",
    type: "Flower",
    stage: 4,
    lastWatered: new Date(),
  },
  { id: "1", name: "Bamboo", type: "Grass", stage: 2, lastWatered: new Date() },
  {
    id: "1",
    name: "Lavender",
    type: "Herb",
    stage: 1,
    lastWatered: new Date(),
  },
  {
    id: "1",
    name: "Orchid",
    type: "Flower",
    stage: 3,
    lastWatered: new Date(),
  },
  { id: "1", name: "Mint", type: "Herb", stage: 1, lastWatered: new Date() },
];

const Garden = () => {
  return (
    <div className="px-16 mt-8">
      <div className="grid grid-cols-3">
        {plants.map((plant, index) => {
          return (
            <div key={index}>
              <Plant key={index} plant={plant} />
              <PlantCard key={index} plant={plant} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Garden;
