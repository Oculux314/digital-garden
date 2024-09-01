"use server";
import { createPlant as _createPlant } from "@/services/plantService";

export async function createPlant(plant: {name: string, type: string, lastWatered: Date}) {
  return _createPlant(plant);
}
