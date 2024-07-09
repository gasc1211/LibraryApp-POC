import express, { type Request, type Response } from "express";
import bodyParser from "body-parser";
import { userRouter } from "./routes/users";

const app = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Loud and clear!");
});

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
