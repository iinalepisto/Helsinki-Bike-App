import express from "express";
import { allStationCount, allStations, allStationsCoordinates, singleStation, stationCoordinates } from "../controllers/stationController.js";

const stationRouter = express.Router();

stationRouter.get("/", allStations);
stationRouter.get("/totalcount", allStationCount);
stationRouter.get("/coordinates", allStationsCoordinates);
stationRouter.get("/:id", singleStation);
stationRouter.get("/:id/coordinates", stationCoordinates);


export default stationRouter;