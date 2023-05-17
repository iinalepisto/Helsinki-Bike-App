import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./database/db.js";
import journeyRouter from "./routes/journeyRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.use("/api/journeys", journeyRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})