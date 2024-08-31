"use server";
import { UserType } from "@/models/user";
import { stealPlant as _stealPlant, waterPlant as _waterPlant} from "@/services/userService";

export async function stealPlant(
    user: UserType, otherUser: UserType, index: number) {
  _stealPlant(user, otherUser, index);
}

export async function waterPlant(
    user: UserType, index: number) {
  _waterPlant(user, index);
}
