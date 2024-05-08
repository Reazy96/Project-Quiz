// *import user services
import { addUser } from "./userService/addUser.js";
import { deleteUser } from "./userService/deleteUser.js";
import { getAllUsers } from "./userService/getAllUsers.js";

// * import question services
import { addQuestion } from "./questionsService/addQuestion.js";

// * import quiz services
import { getAllQuizzes } from "./quizService/getAllQuizzes.js";
import { getOneQuiz } from "./quizService/getOneQuiz.js";

// * import answer services
import { addAnswer } from "./answersService/addAnswer.js";

export const UserService = { addUser, deleteUser, getAllUsers };
export const QuestionService = { addQuestion };
export const QuizService = { getAllQuizzes, getOneQuiz };
export const AnswerService = { addAnswer };
