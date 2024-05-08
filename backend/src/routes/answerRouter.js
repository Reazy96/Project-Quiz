import express from "express";
import { AnswerController } from "../controllers/answerController.js";

export const answerRouter = express.Router().post("/", AnswerController.postAddAnswerCon);
