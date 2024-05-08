import express from "express";

import { UserController } from "../controllers/userController.js";

export const userRouter = express
  .Router()
  .get("/", UserController.getAllUsersCon)
  .post("/", UserController.addNewUserCon)
  .delete("/:userId", UserController.addNewUserCon);




