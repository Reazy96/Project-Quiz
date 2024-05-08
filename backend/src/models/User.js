import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "user" }
);

export const User = mongoose.model("User", userSchema);
