import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Order managment app is running");
});

export default app;
