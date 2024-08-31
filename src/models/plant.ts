// Mongoose model for Plant
import { Schema, model } from "mongoose";

export type PlantType = {
  id: string;
  name: string;
  type: string;
  lastWatered: Date;
  stage: number;
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
  lastWatered: {
    type: Date,
    required: true,
  }
});

export const Plant = model("Plant", PlantSchema);
