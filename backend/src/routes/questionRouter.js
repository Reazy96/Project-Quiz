import express from "express";
import { QuestionController } from "../controllers/questionController.js";

export const questionRouter = express.Router().post("/:quizId", QuestionController.addNewQuestionCon);
