import supertest from "supertest";
import createServer from "../server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = createServer();

describe("journeys", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_TEST_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe("get all journeys", () => {
        it("should return 200 status and contain objects", async () => {
            const response = await supertest(app).get(`/api/journeys`);

            expect(response.statusCode).toBe(200);
            expect(response.body.journeys.length).toBeGreaterThan(0);
            expect(response.body.journeys.every((journey) => typeof journey === "object")).toBe(true);
        });
    });

    describe("get journeys totalcount", () => {
        it("should return 200 status and totalcount of journeys", async () => {
            const response = await supertest(app).get(`/api/journeys/totalcount`);

            expect(response.statusCode).toBe(200);
            expect(typeof response.body).toBe("number");
            expect(response.body).toBeGreaterThan(0);
        });
    })

    describe("get single journey", () => {
        it("should return 200 status and journey object", async () => {
            const id = "64748dd9361c5fab34f2a187";
            const response = await supertest(app).get(`/api/journeys/${id}`);

            expect(response.statusCode).toBe(200);
            expect(response.body._id).toBe(id);
        });

        describe("get single journey", () => {
            it("should return 500 status for invalid id", async () => {
                const invalidId = "invalidId";
                const response = await supertest(app).get(`/api/journeys/${invalidId}`);

                expect(response.statusCode).toBe(500);
            });
        });

        describe("get single journey", () => {
            it("should return 404 status for id not existing", async () => {
                const invalidId = "10";
                const response = await supertest(app).get(`/api/journey/${invalidId}`);

                expect(response.statusCode).toBe(404);
            });
        });
    });
})