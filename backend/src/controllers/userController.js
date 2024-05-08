import { UserService } from "../service/serviceIndex.js";

async function getAllUsersCon(req, res) {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Couldn't find Users" });
  }
}

async function addNewUserCon(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UserService.addUser(newUser);
    req.json(addedUser);
  } catch (err) {
    res.status(500).json({ err, message: "Couldn't add new User" });
  }
}

async function deleteUserCon(req, res) {
  try {
    const userId = req.params.userId;
    const deleteUser = await UserService.deleteUser(userId);
    res.json(deleteUser);
  } catch (err) {
    res.status(500).json({ err, message: "Couldn't delete User with ID: " + userId });
  }
}

export const UserController = {
  getAllUsersCon,
  addNewUserCon,
  deleteUserCon,
};
