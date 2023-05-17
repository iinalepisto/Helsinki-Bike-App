import express from "express";
import { allJourneys, singleJourney } from "../controllers/journeyController.js";

const journeyRouter = express.Router();

journeyRouter.get("/", allJourneys);
journeyRouter.get("/:id", singleJourney);

export default journeyRouter;