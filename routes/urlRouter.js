import express from "express";



const urlRouter = express.Router();

urlRouter.get("/");
urlRouter.post("/url");
urlRouter.get("/:id");

export default urlRouter;
