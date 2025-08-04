import express from "express";
import { welcomeMsg } from "#middlewares/WelcomeMessage.js";

const app = express();
const port = process.env.API_SERVER_PORT ?? 9001;

app.get("/", welcomeMsg);

app.listen(port, () => {
  return console.log("API up and running on port: ".concat(port.toString()));
});
