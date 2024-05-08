import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{ type: mongoose.Types.ObjectId, ref: "Questions", required: true }],
  },
  { collection: "quiz" }
);

export const Quiz = mongoose.model("Quiz", quizSchema);

// _id:"blalbla"
// title: "Allgemeinwissen",
// description: "teste dein wissen in allen bereichen ",
// questions:["347384787428347","343423432234423"] -> verweisen auf die fragen in der questions-collection



