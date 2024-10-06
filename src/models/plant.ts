import mongoose from "mongoose";

export type PlantType = {
  id: string;
  name: string;
  type: string;
  lastWatered: Date;
  // stage: number;
};

export const PlantSchema = new mongoose.Schema({
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
  },
});

export const Plant =
  mongoose.models?.Plant ?? mongoose.model<PlantType>("Plant", PlantSchema);
