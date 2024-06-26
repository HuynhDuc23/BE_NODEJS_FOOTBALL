import { getTeamMatchByIdMatch,addTeamMatch,getDetailsTeamMatch } from "../controllers/TeamMatch.controller.js"
import { Router } from "express";
const teamMatchRouter = Router();
teamMatchRouter.get("/",getDetailsTeamMatch)
teamMatchRouter.get("/:id",getTeamMatchByIdMatch)
teamMatchRouter.post("/",addTeamMatch)
export default teamMatchRouter