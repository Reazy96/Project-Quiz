import { QuestionService } from "../service/serviceIndex.js";

async function addNewQuestionCon(req, res) {
  try {
    const newQuestion = req.body;
    const quizId = req.params.quizId;
    const addedQuestion = await QuestionService.addQuestion(newQuestion, quizId);
    res.json(addedQuestion);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Couldn't add new Question" });
  }
}
export const QuestionController = { addNewQuestionCon };
