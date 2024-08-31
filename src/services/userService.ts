import { PlantType } from "@/models/plant";
import { User, UserType } from "@/models/user";

const MAX_PLANTS: number = 9;
const TIME_FROM_LAST_WATERED: number = 24 * 60 * 60 * 1000; // 24 hours

export async function createUser(user: { name: string }) {
  return User.create(user);
}

export async function getUsers() {
  return User.find();
}

export async function getUserById(id: string): Promise<UserType | null> {
  return User.findById(id);
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
  user: UserType,
  otherUser: UserType,
  index: number
) {
  if (index >= otherUser.plants.length) {
    throw Error("Plant does not exist");
  }
  let plant: PlantType = otherUser.plants[index];
  if (user.plants.length >= MAX_PLANTS) {
    throw Error("You already have " + MAX_PLANTS + " plants");
  }
  if (Date.now() - plant.lastWatered.getTime() < TIME_FROM_LAST_WATERED) {
    throw Error("The plant is well-watered");
  }
  deletePlant(otherUser, plant);
  addPlant(user, plant);
}
