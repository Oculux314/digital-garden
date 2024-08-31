"use server";
import { PlantType } from "@/models/plant";
import { createPlant } from "@/services/plantService";

export async function addPlant(plant: Omit<PlantType, "id">) {
  createPlant(plant);
}
