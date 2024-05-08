import { User } from "../../models/User.js";

export function getAllUsers() {
  return User.find({});
}
