import mongoose from "mongoose";
import startMongoDB from "../database/db.js";

describe('MongoDB connection and csv files reading', () => {
    beforeAll(async () => {
        await startMongoDB();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("Should connect to mongodb", () => {
        expect(mongoose.connection.readyState).toEqual(1);
    })
})