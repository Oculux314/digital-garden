import { PlantType } from "@/models/plant";
import { User, UserType } from "@/models/user";
import { waterPlant as _waterPlant } from "./plantService";

const MAX_PLANTS: number = 9;
const TIME_FROM_LAST_WATERED: number = 24 * 60 * 60 * 1000; // 24 hours

export async function createUser(user: { name: string }) {
  return User.create(user);
}

export async function getUsers() {
  return User.find();
}

export async function getUsersByNameOrEmail(name: string, email: string) {
  return User.find({ $or: [{ name }, { email }] });
}

export async function addPlant(user: UserType, plant: PlantType) {
  return User.findByIdAndUpdate(user.id, { plants: user.plants.concat(plant) });
}

export async function deletePlant(user: UserType, plant: PlantType) {
  return User.findByIdAndUpdate(user.id, {
    plants: user.plants.filter((plants) => plants !== plant),
  });
}

export async function stealPlant(
    user: UserType, otherUser: UserType, index: number) {

  if (user.plants.length >= MAX_PLANTS) {
    throw Error("You already have " + MAX_PLANTS + " plants");
  }
  if (index >= user.plants.length) {
    throw Error("Plant does not exist");
  }
  let plant: PlantType = otherUser.plants[index];
  if (Date.now() - plant.lastWatered.getTime()
      < TIME_FROM_LAST_WATERED) {
    throw Error("The plant is well-watered");
  }
  deletePlant(otherUser, plant);
  addPlant(user, plant);
}

export async function waterPlant(
    user: UserType, index: number) {

  if (index >= user.plants.length) {
    throw Error("Plant does not exist");
  }
  _waterPlant(user.plants[index]);
}
