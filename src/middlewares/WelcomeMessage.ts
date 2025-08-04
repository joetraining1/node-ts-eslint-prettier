import { RequestHandler, Request, Response } from "express";

interface messageJson {
  message: string;
}

export const welcomeMsg: RequestHandler = (req: Request, res: Response) => {
  return res
    .send(<messageJson>{
      message: "You are connected to this API.",
    })
    .status(<number>200);
};
