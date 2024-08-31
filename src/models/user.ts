import mongoose from "mongoose";
import { PlantType } from "./plant";

export type UserType = {
  id: string;
  name: string;
  email: string;
  image: string;
  plants: Array<PlantType>;
};

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  plants: {
    type: Array<PlantType>,
    required: false,
  },
});

export const User = mongoose.models?.User ?? mongoose.model("User", UserSchema);
