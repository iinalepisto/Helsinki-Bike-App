import express from "express";
import { allStations, singleStation } from "../controllers/stationController.js";

const stationRouter = express.Router();

stationRouter.get("/", allStations);
stationRouter.get("/:id", singleStation);

export default stationRouter;