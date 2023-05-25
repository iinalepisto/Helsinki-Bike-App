import express from "express";
import { allJourneys, singleJourney, getTotalJourneyCount, searchJourneys } from "../controllers/journeyController.js";

const journeyRouter = express.Router();

journeyRouter.get("/", allJourneys);
journeyRouter.get("/search", searchJourneys)
journeyRouter.get("/totalcount", getTotalJourneyCount);
journeyRouter.get("/:id", singleJourney);

export default journeyRouter;