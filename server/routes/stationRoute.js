import express from "express";
import { allStations, singleStation, stationCoordinates } from "../controllers/stationController.js";

const stationRouter = express.Router();

stationRouter.get("/", allStations);
stationRouter.get("/:id", singleStation);
stationRouter.get("/:id/coordinates", stationCoordinates);


export default stationRouter;