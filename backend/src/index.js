import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDb } from "./models/indexConnect.js";
import { userRouter } from "./routes/userRouter.js";
import { questionRouter } from "./routes/questionRouter.js";
import { answerRouter } from "./routes/answerRouter.js";

// * Middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// * User Routes
app.use("/api/v1/users", userRouter);

// * Question Routes
app.use("/api/v1/question", questionRouter);

// * Answer Routes
app.use("/api/v1/answer", answerRouter);

// * Server Listener
connectToDb()
  .then(() => {
    const PORT = 3110;
    app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
