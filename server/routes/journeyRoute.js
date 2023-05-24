import express from "express";
import { allJourneys, singleJourney, getTotalJourneyCount } from "../controllers/journeyController.js";

const journeyRouter = express.Router();

journeyRouter.get("/", allJourneys);
journeyRouter.get("/totalcount", getTotalJourneyCount);
journeyRouter.get("/:id", singleJourney);

export default journeyRouter;