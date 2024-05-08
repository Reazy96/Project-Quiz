import { AnswerService } from "../service/serviceIndex.js";

async function postAddAnswerCon(req, res) {
  try {
    const answerInfo = req.body;
    const result = await AnswerService.addAnswer(answerInfo);
    res.status(201).json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not add answer" });
  }
}

export const AnswerController = { postAddAnswerCon };
