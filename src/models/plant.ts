// Mongoose model for Plant
import { Schema, model } from "mongoose";

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
