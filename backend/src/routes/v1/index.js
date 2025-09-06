import { Router } from "express";

const routerIndex = Router();

routerIndex.get("/", (req, res) => {
  res.json({ message: "hello!" });
});

export default routerIndex;
