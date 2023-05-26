import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./database/db.js";
import journeyRouter from "./routes/journeyRoute.js";
import stationRouter from "./routes/stationRoute.js";
import startMongoDB from "./database/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/journeys", journeyRouter);
app.use("/api/stations", stationRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

startMongoDB();

export default app;