"use server";
import { UserType } from "@/models/user";
import {
  createUser as _createUser,
  getUserByEmail as _getUserByEmail,
  getUserById as _getUserById,
  stealPlant as _stealPlant,
  waterPlant as _waterPlant,
  deletePlantByIds,
  getUsers,
  getUsersByNameOrEmail,
} from "@/services/userService";

export async function createUser(user: { name: string }) {
  return _createUser(user);
}

export async function stealPlant(
  userId: string,
  otherUserId: string,
  plantId: string
) {
  console.log(userId);
  const log = await getUserByEmail(userId)!;
  _stealPlant(log?.id!, otherUserId, plantId);
}

export async function deletePlant(userId: string, indexId: string) {
  deletePlantByIds(userId, indexId);
}

export async function waterPlant(userId: string, plantId: string) {
  _waterPlant(userId, plantId);
}

export async function getUserById(id: string) {
  return _getUserById(id);
}

export async function getUserByEmail(email: string) {
  const user = await _getUserByEmail(email);
  if (!user) {
    return null;
  }
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    plants: user.plants,
  };
}

export async function searchForUser(searchText: string) {
  return getUsersByNameOrEmail(searchText, searchText);
}

// Currently just gets all users in the database cause we have no friends :(
export async function getFriends() {
  return getUsers();
}
