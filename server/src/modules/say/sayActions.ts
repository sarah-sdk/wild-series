import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (_req, res) => {
  res.send("Welcome to Wild Series !");
};

export default { sayWelcome };
