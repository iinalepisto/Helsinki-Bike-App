import express from "express";
import cors from "cors";
import journeyRouter from "./routes/journeyRoute.js";
import stationRouter from "./routes/stationRoute.js";

const createServer = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use("/api/journeys", journeyRouter);
    app.use("/api/stations", stationRouter);

    return app;
}

export default createServer;