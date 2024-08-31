import { Plant, PlantType } from "@/models/plant";

export async function createPlant(plant: Omit<PlantType, "id">) {
  return Plant.create(plant);
}

export async function getPlants() {
  return Plant.find();
}

export async function getPlantById(id: string): Promise<PlantType | null> {
  return Plant.findById(id);
}

export async function updatePlant(plant: PlantType) {
  return Plant.findByIdAndUpdate(plant.id, plant);
}

export async function waterPlant(plant: PlantType) {
  plant.lastWatered = new Date(Date.now());
  updatePlant(plant);
}
