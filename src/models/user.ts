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
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    emailVerified: {
        type: null,
        required: true,
    },
    plants: {
        type: Array<PlantType>,
        required: false,
    }
});

export const User = model("User", UserSchema);
