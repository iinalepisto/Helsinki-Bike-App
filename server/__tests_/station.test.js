import supertest from "supertest";
import createServer from "../server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = createServer();

describe("stations", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_TEST_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe("get all stations", () => {
        it("should return 200 status and contain objects", async () => {
            const response = await supertest(app).get(`/api/stations`);

            expect(response.statusCode).toBe(200);
            expect(response.body.stations.length).toBeGreaterThan(0);
            expect(response.body.stations.every((station) => typeof station === "object")).toBe(true);
        });
    });

    describe("get stations totalcount", () => {
        it("should return 200 status and totalcount of stations", async () => {
            const response = await supertest(app).get(`/api/stations/totalcount`);

            expect(response.statusCode).toBe(200);
            expect(typeof response.body).toBe("number");
            expect(response.body).toBeGreaterThan(0);
        });
    })

    describe("get coordinates of every station", () => {
        it("should return 200 status and an array of station coordinates", async () => {
            const response = await supertest(app).get("/api/stations/coordinates");

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);

            const expectedFields = ["id", "nimi", "y", "x"];
            response.body.forEach(station => {
                expectedFields.forEach(field => {
                    expect(station).toHaveProperty(field);
                });
            });
        });
    });

    describe("get single station", () => {
        it("should return 200 status and station object", async () => {
            const id = 501;
            const response = await supertest(app).get(`/api/stations/${id}`);

            expect(response.statusCode).toBe(200);
            expect(response.body.id).toBe(id);
        });
    });

    describe("get single station", () => {
        it("should return 500 status for invalid id", async () => {
            const invalidId = "invalidId";
            const response = await supertest(app).get(`/api/stations/${invalidId}`);

            expect(response.statusCode).toBe(500);
        });
    });

    describe("get single station", () => {
        it("should return 404 status for id not existing", async () => {
            const invalidId = 10;
            const response = await supertest(app).get(`/api/stations/${invalidId}`);

            expect(response.statusCode).toBe(404);
        });
    });

    describe("get single station coordinates", () => {
        it("should return 200 status and station coordinates", async () => {
            const id = 501;
            const response = await supertest(app).get(`/api/stations/${id}/coordinates`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('x');
            expect(response.body).toHaveProperty('y');
        });
    });

    describe("get single station coordinates", () => {
        it("should return 500 status for invalid id", async () => {
            const invalidId = "invalidId";
            const response = await supertest(app).get(`/api/stations/${invalidId}/coordinates`);

            expect(response.statusCode).toBe(500);
        });
    });

    describe("get single station coordinates", () => {
        it("should return 404 status for id not existing", async () => {
            const invalidId = 100;
            const response = await supertest(app).get(`/api/stations/${invalidId}/coordinates`);

            expect(response.statusCode).toBe(404);
        });
    });
});