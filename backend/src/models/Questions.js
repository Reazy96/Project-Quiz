import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    choices: [{ type: String, required: true }],
    correctChoices: [{ type: String, required: true }],
  },
  { collection: "questions", timestamps: true }
);

export const Questions = mongoose.model("Questions", questionSchema);

// _id:"347384787428347",
// description: was ist die hauptstadt von deutschland?,

// answers:  [ { "text": "Berlin", "correct": false },
//             { "text": "London", "correct": false },
//             { "text": "Paris", "correct": true }   ]
