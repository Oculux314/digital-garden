// CRUD with mongoose

import { Plant } from "@/models/plant";

export async function createPlant(name: string, type: string) {
  return Plant.create({ name, type });
}

export async function getPlants() {
  return Plant.find();
}

export async function getPlantById(id: string) {
  return Plant.findById(id);
}

export async function updatePlant(id: string, name: string, type: string) {
  return Plant.findByIdAndUpdate(id, { name, type });
}
