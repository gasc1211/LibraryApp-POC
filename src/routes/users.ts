import { Router, type Response, type Request } from "express";
import { createInsertSchema } from "drizzle-zod";
import { db } from "../db/db";
import { users } from "../db/schema";

export const userRouter = Router();

const newUserSchema = createInsertSchema(users);

userRouter.get("/all", async (req: Request, res: Response) => {
  let data = await db.select().from(users);
  res.send(data);
});

userRouter.post("/new", async (req: Request, res: Response) => {
  let newUser = req.body.user;
  const parsedInput = newUserSchema.safeParse(newUser);
  if (parsedInput.success) {
    try {
      await db.insert(users).values(parsedInput.data);
    } catch (e) {
      res.status(400).send("Error inserting data...");
    }
    res.status(200).send("Success!");
  } else {
    res.status(400).send("Bad request, failed to insert new user!");
  }
});
