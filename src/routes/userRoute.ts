"use server";
import { UserType } from "@/models/user";
import { stealPlant as _stealPlant } from "@/services/userService";

export async function stealPlant(
    user: UserType, otherUser: UserType, index: number) {
  _stealPlant(user, otherUser, index);
}
