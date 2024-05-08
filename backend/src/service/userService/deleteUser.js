import { User } from "../../models/User.js";

export function deleteUser(userId) {
  return User.findByIdAndDelete(userId).then((removed) => {
    if (!removed) {
      throw new Error("User not found");
    } else {
      return removed;
    }
  });
}
