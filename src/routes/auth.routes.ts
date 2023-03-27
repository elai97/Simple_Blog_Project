import express, { Router, Request, Response, NextFunction } from "express";
import { verifySignUp } from "../middlewares";
import { signup, signin } from "../controllers/auth.controllers";

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

const authRouter = Router();

authRouter.post("/signup",
  verifySignUp.checkDuplicateUsernameOrEmail,
  signup);

authRouter.post("/signin", signin);

export default authRouter;