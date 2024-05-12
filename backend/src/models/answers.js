import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    questionId: { type: mongoose.Types.ObjectId, ref: "Questions", required: true },
    selectedAnswer: [{ type: String, required: true }],
    correct: { type: Boolean, required: true },
  },
  { collection: "answers" }
);

export const Answer = mongoose.model("Answer", answerSchema);

// userId:               nimmt sich die _id von der user collection.
// questionId:           nimmt sich die questionId von der question collection,
// selectedAnswer:       für welche antwort hat er sich entschieden,
// correct:              ob seine antwort falsch oder richtig war
