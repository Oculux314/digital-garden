"use server";
import { PlantType } from "@/models/plant";
import { createPlant as _createPlant } from "@/services/plantService";

export async function createPlant(plant: Omit<PlantType, "id">) {
  _createPlant(plant);
}
