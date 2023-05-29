import mongoose from "mongoose";
import startMongoDB from "../database/db.js";
import Station from "../models/station.js";
import Journey from "../models/journey.js";

describe("Database and importing files", () => {

    beforeAll(async () => {
        await startMongoDB();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("Database connection is succesfull", async () => {
        const connectionState = mongoose.connection.readyState;
        expect(connectionState).toBeGreaterThanOrEqual(1);
    });

    test("Importing stations data is succesfull", async () => {
        const data = await Station.find({});
        expect(data.length).toBeGreaterThan(0);
    });

    test("Importing journey data is succesfull", async () => {
        const data = await Journey.findOne();
        expect(data.durationSec).toBeTruthy();
    });
});
