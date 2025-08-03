import express from "express";
import { Request, Response } from 'express';

const app = express();
const port = 5000;

interface welcome {
  req: Request,
  res: Response
}

const welcomeMsg = async(req: Request, res: Response) => {
  return res.send(
    {
      message: "You are connected to this API.",
    }
  ).status(200);
};

app.get("/", welcomeMsg);

app.listen(port, () => {
  return console.log("API up and running on port: ".concat(port.toString()));
});
