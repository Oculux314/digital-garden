import { Schema, model } from "mongoose";
import { PlantType } from "./plant";

export type UserType = {
    id: string;
    name: string;
    plants: Array<PlantType>;
};

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    plants: {
        type: Array<PlantType>,
        required: true,
    }
});

export const User = model("User", UserSchema);
