import { PlantType } from "@/models/plant";
import { User, UserType } from "@/models/user";
import { notFound } from "next/navigation";
import { waterPlant as _waterPlant } from "./plantService";

const MAX_PLANTS: number = 9;
const TIME_FROM_LAST_WATERED: number = 24 * 60 * 60 * 1000; // 24 hours

export async function createUser(user: { name: string }): Promise<UserType> {
  return (await User.create(user));
}

export async function getUsers(): Promise<UserType[]> {
  return (await User.find());
}

export async function getUserById(id: string): Promise<UserType | null> {
  return (await User.findById(id));
}

export async function getUserByEmail(email: string): Promise<UserType | null> {
  console.log("WOWOW", await User.findOne({ email }));

  return (await User.findOne({ email }));
}

export async function getUsersByNameOrEmail(
  name: string,
  email: string
): Promise<UserType[]> {
  const query = {
    $or: [
      { name: { $regex: `.*${name}.*`, $options: "i" } },
      { email: { $regex: `.*${email}.*`, $options: "i" } },
    ],
  };
  return (await User.find(query));
}

export async function addPlant(
  user: UserType,
  plant: PlantType
): Promise<UserType | null> {
  let plants;
  if ("plants" in user) {
    plants = user.plants.concat(plant);
  } else {
    plants = [plant];
  }
  return (
    await User.findByIdAndUpdate(user.id, { $set: { plants: plants } })
  );
}

export async function deletePlant(
  user: UserType,
  plant: PlantType
): Promise<UserType | null> {
  return (
    await User.findByIdAndUpdate(user.id, {
      plants: user.plants.filter((plants) => plants !== plant),
    })
  );
}

export async function stealPlant(
  userId: string,
  otherUserId: string,
  plantId: string
): Promise<void> {
  const user = (await getUserById(userId))!;
  const otherUser = (await getUserById(otherUserId))!;
  const index = otherUser?.plants.findIndex((plant) => plant.id === plantId);

  if (user.plants.length >= MAX_PLANTS) {
    throw Error("You already have " + MAX_PLANTS + " plants");
  }
  if (index >= user.plants.length) {
    throw Error("Plant does not exist");
  }
  let plant: PlantType = otherUser.plants[index];
  if (Date.now() - plant.lastWatered.getTime() < TIME_FROM_LAST_WATERED) {
    throw Error("The plant is well-watered");
  }
  deletePlant(otherUser, plant);
  addPlant(user, plant);
}

export async function deletePlantByIds(
  userId: string,
  plantId: string
): Promise<UserType | null> {
  const user = await getUserById(userId);
  if (!user) {
    return notFound();
  }
  return (
    await User.findByIdAndUpdate(user.id, {
      plants: user.plants.filter((plant) => plant.id !== plantId),
    })
  );
}

export async function waterPlant(
  userId: string,
  plantId: string
): Promise<void> {
  const user = await getUserById(userId);
  if (!user) {
    return notFound();
  }
  user.plants.forEach((plant, index) => {
    if (plant.id === plantId) {
      _waterPlant(user.plants[index]);
    }
  });
}
