import { Questions } from "../../models/Questions.js";
import { Quiz } from "../../models/Quiz.js";

export async function addQuestion(newQuestion, quizId) {
  try {
    // Finde das Quiz anhand seiner ID
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      throw new Error(`Quiz with ID ${quizId} not found`);
    }

    // Erstelle die Frage
    const question = await Questions.create(newQuestion);

    // Füge die ID der Frage zum Quiz hinzu
    quiz.questions.push(question._id);
    await quiz.save();

    return question;
  } catch (error) {
    throw new Error("Error adding question: " + error.message);
  }
}



// export function addQuestion(newQuestion, quizId) {
//   return Questions.findOne({ description: newQuestion.description }).then((foundQuestion) => {
//     if (foundQuestion) {
//       throw new Error("This Question already exists");
//     } else {
//       const foundQuiz = Quiz.findById(quizId);
//       if (!foundQuiz) throw new Error("Quiz not exists" + quizId);
//       return Questions.create(...newQuestion, quizId);
//     }
//   });
// }

//!   ich will dass die question id in die quiz.questions gepusht
//!   wird sobald ich eine question erstellt HTMLLabelElement.
