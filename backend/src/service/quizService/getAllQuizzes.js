import { Quiz } from "../../models/Quiz.js";

export function getAllQuizzes() {
  return Quiz.find({});
}
