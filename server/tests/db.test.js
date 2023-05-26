import mongoose from "mongoose";
import startMongoDB from "../database/db.js";
import dotenv from "dotenv";
import Station from "../models/station.js";

dotenv.config();

beforeAll(async () => {
    await startMongoDB();
    await new Promise((resolve) => setTimeout(() => resolve(), 2000)); // Aseta viive odottamaan tietokantayhteyden muodostumista
});

afterAll(async () => {
    await mongoose.connection.close();
});

test("Database connection on", async () => {
    const connectionState = mongoose.connection.readyState;
    expect(connectionState).toBeGreaterThanOrEqual(1);
});

test("Importing stations data is succesfull", async () => {
    const data = await Station.find({});
    expect(data.length).toBeGreaterThan(0);
});