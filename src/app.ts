import express from "express";
import * as dotenv from 'dotenv';
dotenv.config()
import { urlencoded } from "body-parser";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import authRouter from "./routes/auth.routes";
import postsRoutes from "./routes/posts.route";
import connection from "./configs/db.configs";

const app = express();

app.use(express.json());

app.use(urlencoded({ extended: true }));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postsRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(3000, () => {
  console.log("Server started on port 3000");
});