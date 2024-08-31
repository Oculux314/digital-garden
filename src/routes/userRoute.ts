"use server";
import { UserType } from "@/models/user";
import {
  createUser as _createUser,
  stealPlant as _stealPlant,
  waterPlant as _waterPlant,
  getUsers,
  getUserById as _getUserById,
  getUserByEmail as _getUserByEmail,
  getUsersByNameOrEmail,
} from "@/services/userService";

export async function createUser(user: { name: string }) {
  return _createUser(user);
}

export async function stealPlant(
  user: UserType,
  otherUser: UserType,
  index: number
) {
  _stealPlant(user, otherUser, index);
}

export async function waterPlant(userId: string, plantId: string) {
  _waterPlant(userId, plantId);
}

export async function getUserById(id: string) {
  return _getUserById(id);
}

export async function getUserByEmail(email: string) {
  return _getUserByEmail(email);
}

export async function searchForUser(searchText: string) {
  return getUsersByNameOrEmail(searchText, searchText);
}

// Currently just gets all users in the database cause we have no friends :(
export async function getFriends() {
  return getUsers();
}
