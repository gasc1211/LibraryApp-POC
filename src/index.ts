import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Loud and clear!");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
