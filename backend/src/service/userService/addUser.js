import { User } from "../../models/User.js";

export function addUser(newUser) {
  return User.findOne({ email: newUser.email }).then((foundUser) => {
    if (foundUser) {
      throw new Error("User with this E-Mail already exists");
    } else {
      return User.create(newUser);
    }
  });
}
