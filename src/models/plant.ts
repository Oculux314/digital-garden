// Mongoose model for Plant
import { Schema, model } from "mongoose";

export type PlantType = {
  id: string;
  name: string;
  type: string;
};

export const PlantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const Plant = model("Plant", PlantSchema);
