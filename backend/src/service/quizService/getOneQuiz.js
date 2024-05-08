import { Quiz } from "../../models/Quiz.js";

export function getOneQuiz(quizId) {
  return Quiz.findById(quizId).then((foundQuiz) => {
    if (foundQuiz) return { ...foundQuiz.toObject() };
    else return null;
  });
}
