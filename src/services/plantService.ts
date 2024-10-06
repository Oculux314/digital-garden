import { Plant, PlantType } from "@/models/plant";

export async function createPlant(plant: {
  name: string;
  type: string;
  lastWatered: Date;
}): Promise<PlantType> {
  return (await Plant.create(plant)).lean();
}

export async function getPlantById(id: string): Promise<PlantType | null> {
  return (await Plant.findById(id)).lean();
}

export async function updatePlant(plant: PlantType): Promise<PlantType | null> {
  return (await Plant.findByIdAndUpdate(plant.id, plant)).lean();
}

export async function waterPlant(plant: PlantType): Promise<void> {
  plant.lastWatered = new Date(Date.now());
  updatePlant(plant);
}
