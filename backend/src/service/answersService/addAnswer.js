import { Answer } from "../../models/answers.js";
import { Questions } from "../../models/Questions.js";
import { User } from "../../models/User.js";

export async function addAnswer(answerInfo) {
  const oneChanceAnswerr = await Answer.findOne({
    userId: answerInfo.userId,
    questionId: answerInfo.questionId,
  });

  if (oneChanceAnswerr) throw new Error("User can answer question just one time");

  const question = await Questions.findById(answerInfo.questionId);
  if (!question) throw new Error("Question doesn't exist");

  const user = await User.findById(answerInfo.userId);
  if (!user) throw new Error("User doesn't exist");

  const correctAnswer =
    answerInfo.selectedAnswer.length === question.correctChoices.length &&
    answerInfo.selectedAnswer.every((choice) => question.correctChoices.includes(choice));
}

const answer = await Answer.create({ ...answerInfo, correct: correctAnswer });
return answer;
